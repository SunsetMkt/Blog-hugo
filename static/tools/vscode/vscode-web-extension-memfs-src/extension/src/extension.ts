/**
 * https://code.visualstudio.com/api/extension-guides/web-extensions
 * https://code.visualstudio.com/api/extension-guides/virtual-workspaces
 */

import * as vscode from "vscode";
import { posix as path } from "path";
import { Buffer } from "buffer";
import { promises as fs, configureSingle } from "@zenfs/core";
import { IndexedDB } from "@zenfs/dom";

const textDecoder = new TextDecoder();

async function makeSureRoot() {
  if (!(await fs.exists("/"))) {
    await fs.mkdir("/", { recursive: true });
  }
}

export async function activate(context: vscode.ExtensionContext) {
  await configureSingle({ backend: IndexedDB });
  await makeSureRoot();

  console.log("Hello, MemFS!");

  const memFs = new MemFS("memfs");
  context.subscriptions.push(memFs);
  context.subscriptions.push(
    vscode.workspace.registerFileSystemProvider("memfs", memFs, {
      isCaseSensitive: true,
    }),
  );
  context.subscriptions.push(
    vscode.workspace.registerFileSearchProvider(
      "memfs",
      new MemFSFileSearchProvider(memFs),
    ),
  );
  context.subscriptions.push(
    vscode.workspace.registerTextSearchProvider(
      "memfs",
      new MemFSTextSearchProvider(memFs),
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("memfs.workspaceInit", (_) => {
      vscode.workspace.updateWorkspaceFolders(0, 0, {
        uri: vscode.Uri.parse("memfs:/"),
        name: "MemFS",
      });
    }),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("memfs.reset", async () => {
      for (const dir of await fs.readdir("/")) {
        await fs.rm(dir, { recursive: true, force: true });
      }
      vscode.window.showInformationMessage(
        "MemFS cleared, please reload the window.",
      );
    }),
  );
}

class MemFS implements vscode.FileSystemProvider, vscode.Disposable {
  constructor(public readonly scheme: string) {}
  readonly onDidChangeFile: vscode.Event<vscode.FileChangeEvent[]> = () =>
    new vscode.Disposable(() => undefined);

  dispose(): void {
    // no-op
  }

  async writeData(
    uri: vscode.Uri,
    contents: string | Uint8Array,
    options: { create: boolean; overwrite: boolean },
  ): Promise<void> {
    const buffer =
      typeof contents === "string" ? Buffer.from(contents) : contents;
    await this.writeFile(uri, buffer, options);
  }

  watch(
    _uri: vscode.Uri,
    _options: { recursive: boolean; excludes: string[] },
  ): vscode.Disposable {
    return new vscode.Disposable(() => undefined);
  }

  async stat(uri: vscode.Uri): Promise<vscode.FileStat> {
    const fsPath = this.asFsPath(uri);
    try {
      const stats = await fs.stat(fsPath);
      return {
        type: this.toFileType(stats),
        ctime: stats.ctime.getTime(),
        mtime: stats.mtime.getTime(),
        size: stats.size,
      };
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  async readDirectory(uri: vscode.Uri): Promise<[string, vscode.FileType][]> {
    const fsPath = this.asFsPath(uri);
    try {
      const entries = await fs.readdir(fsPath);
      const result: [string, vscode.FileType][] = [];
      for (const name of entries) {
        const childUri = vscode.Uri.joinPath(uri, name);
        const stat = await fs.stat(this.asFsPath(childUri));
        result.push([name, this.toFileType(stat)]);
      }
      return result;
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  async readFile(uri: vscode.Uri): Promise<Uint8Array> {
    const fsPath = this.asFsPath(uri);
    try {
      const data = await fs.readFile(fsPath);
      return data instanceof Uint8Array ? data : new Uint8Array(data);
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  async writeFile(
    uri: vscode.Uri,
    content: Uint8Array,
    options: { create: boolean; overwrite: boolean },
  ): Promise<void> {
    const fsPath = this.asFsPath(uri);
    if (!(await fs.exists(fsPath)) && !options.create) {
      throw vscode.FileSystemError.FileNotFound(uri);
    }
    try {
      await fs.writeFile(fsPath, content, {
        flag: options.overwrite ? "w" : "wx",
      });
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  async delete(
    uri: vscode.Uri,
    options: { recursive: boolean },
  ): Promise<void> {
    const fsPath = this.asFsPath(uri);
    try {
      await fs.rm(fsPath, { force: true, recursive: options.recursive });
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  async rename(
    oldUri: vscode.Uri,
    newUri: vscode.Uri,
    options: { overwrite: boolean },
  ): Promise<void> {
    const oldPath = this.asFsPath(oldUri);
    const newPath = this.asFsPath(newUri);

    try {
      if (options.overwrite && (await fs.exists(newPath))) {
        await fs.rm(newPath, { force: true, recursive: true });
      }
      await fs.rename(oldPath, newPath);
    } catch (error) {
      throw this.toFileSystemError(error, oldUri);
    }
  }

  async copy(
    source: vscode.Uri,
    destination: vscode.Uri,
    options: { overwrite: boolean },
  ): Promise<void> {
    const sourcePath = this.asFsPath(source);
    const destPath = this.asFsPath(destination);

    try {
      if (!(await fs.exists(sourcePath))) {
        throw vscode.FileSystemError.FileNotFound(source);
      }
      if ((await fs.exists(destPath)) && !options.overwrite) {
        throw vscode.FileSystemError.FileExists(destination);
      }

      await this.ensureParentDirectory(destPath);
      if ((await fs.stat(sourcePath)).isDirectory()) {
        await this.copyDirectory(source, destination, options.overwrite);
      } else {
        const data = await fs.readFile(sourcePath);
        await fs.writeFile(
          destPath,
          data instanceof Uint8Array ? data : new Uint8Array(data),
        );
      }
    } catch (error) {
      throw this.toFileSystemError(error, source);
    }
  }

  async createDirectory(uri: vscode.Uri): Promise<void> {
    const fsPath = this.asFsPath(uri);
    try {
      await fs.mkdir(fsPath, { recursive: true });
    } catch (error) {
      throw this.toFileSystemError(error, uri);
    }
  }

  private async copyDirectory(
    source: vscode.Uri,
    destination: vscode.Uri,
    overwrite: boolean,
  ): Promise<void> {
    const sourcePath = this.asFsPath(source);
    const destPath = this.asFsPath(destination);

    if (!(await fs.exists(destPath))) {
      await fs.mkdir(destPath, { recursive: true });
    }

    const entries = await fs.readdir(sourcePath);
    for (const entry of entries) {
      const childSource = vscode.Uri.joinPath(source, entry);
      const childDestination = vscode.Uri.joinPath(destination, entry);
      const stat = await fs.stat(this.asFsPath(childSource));
      if (stat.isDirectory()) {
        await this.copyDirectory(childSource, childDestination, overwrite);
      } else {
        const data = await fs.readFile(this.asFsPath(childSource));
        await fs.writeFile(
          this.asFsPath(childDestination),
          data instanceof Uint8Array ? data : new Uint8Array(data),
        );
      }
    }
  }

  private async ensureParentDirectory(fsPath: string): Promise<void> {
    const parent = path.dirname(fsPath);
    if (parent && parent !== fsPath && !(await fs.exists(parent))) {
      await fs.mkdir(parent, { recursive: true });
    }
  }

  private toFileType(stats: {
    isFile(): boolean;
    isDirectory(): boolean;
    isSymbolicLink(): boolean;
  }): vscode.FileType {
    if (stats.isFile()) {
      return vscode.FileType.File;
    }
    if (stats.isDirectory()) {
      return vscode.FileType.Directory;
    }
    if (stats.isSymbolicLink()) {
      return vscode.FileType.SymbolicLink;
    }
    return vscode.FileType.Unknown;
  }

  private asFsPath(uri: vscode.Uri): string {
    if (uri.scheme !== this.scheme) {
      throw vscode.FileSystemError.Unavailable(
        `Unsupported scheme: ${uri.scheme}`,
      );
    }
    return uri.path || "/";
  }

  private toFileSystemError(
    error: unknown,
    uri: vscode.Uri,
  ): vscode.FileSystemError {
    const err = error as NodeJS.ErrnoException;
    switch (err?.code) {
      case "ENOENT":
        return vscode.FileSystemError.FileNotFound(uri);
      case "EEXIST":
        return vscode.FileSystemError.FileExists(uri);
      case "EISDIR":
        return vscode.FileSystemError.FileIsADirectory(uri);
      case "ENOTDIR":
        return vscode.FileSystemError.FileNotFound(uri);
      default:
        return vscode.FileSystemError.Unavailable(
          err?.message ?? "Unknown error",
        );
    }
  }
}

class MemFSFileSearchProvider implements vscode.FileSearchProvider {
  constructor(private memFs: MemFS) {}

  async provideFileSearchResults(
    query: vscode.FileSearchQuery,
    options: vscode.FileSearchOptions,
    token: vscode.CancellationToken,
  ): Promise<vscode.Uri[]> {
    const results: vscode.Uri[] = [];
    const pattern = query.pattern;
    const patternLower = pattern.toLowerCase();

    const searchInFolder = async (folderPath: string): Promise<void> => {
      if (token.isCancellationRequested) {
        return;
      }

      try {
        const entries = await fs.readdir(folderPath);
        for (const entry of entries) {
          if (token.isCancellationRequested) {
            return;
          }

          const entryPath = path.join(folderPath, entry);
          const stat = await fs.stat(entryPath);

          if (stat.isDirectory()) {
            if (options.maxResults && results.length >= options.maxResults) {
              return;
            }
            await searchInFolder(entryPath);
          } else if (stat.isFile()) {
            // File search uses case-insensitive matching by default (consistent with VS Code behavior)
            if (entry.toLowerCase().includes(patternLower)) {
              results.push(
                vscode.Uri.parse(`${this.memFs.scheme}:${entryPath}`),
              );
              if (options.maxResults && results.length >= options.maxResults) {
                return;
              }
            }
          }
        }
      } catch {
        // Ignore errors for inaccessible directories
      }
    };

    for (const folder of options.includes || []) {
      if (token.isCancellationRequested) {
        break;
      }
      const folderPath = folder.path || "/";
      await searchInFolder(folderPath);
    }

    // If no includes specified, search from root
    if (!options.includes || options.includes.length === 0) {
      await searchInFolder("/");
    }

    return results;
  }
}

class MemFSTextSearchProvider implements vscode.TextSearchProvider {
  constructor(private memFs: MemFS) {}

  async provideTextSearchResults(
    query: vscode.TextSearchQuery,
    options: vscode.TextSearchOptions,
    progress: vscode.Progress<vscode.TextSearchResult>,
    token: vscode.CancellationToken,
  ): Promise<vscode.TextSearchComplete> {
    let limitHit = false;
    let resultCount = 0;

    const searchPattern = query.isRegExp
      ? new RegExp(query.pattern, query.isCaseSensitive ? "g" : "gi")
      : null;
    const searchString = query.isCaseSensitive
      ? query.pattern
      : query.pattern.toLowerCase();

    const searchInFile = async (filePath: string): Promise<void> => {
      if (token.isCancellationRequested || limitHit) {
        return;
      }

      try {
        const content = await fs.readFile(filePath);
        const text = textDecoder.decode(content);
        const lines = text.split(/\r?\n/);
        const fileUri = vscode.Uri.parse(`${this.memFs.scheme}:${filePath}`);

        for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
          if (token.isCancellationRequested || limitHit) {
            return;
          }

          const line = lines[lineNumber];
          const searchLine = query.isCaseSensitive ? line : line.toLowerCase();

          if (searchPattern) {
            // Regex search
            searchPattern.lastIndex = 0;
            let match: RegExpExecArray | null;
            while (
              (match = searchPattern.exec(line)) !== null &&
              !limitHit &&
              !token.isCancellationRequested
            ) {
              progress.report({
                uri: fileUri,
                ranges: new vscode.Range(
                  lineNumber,
                  match.index,
                  lineNumber,
                  match.index + match[0].length,
                ),
                preview: {
                  text: line,
                  matches: new vscode.Range(
                    0,
                    match.index,
                    0,
                    match.index + match[0].length,
                  ),
                },
              });
              resultCount++;
              if (options.maxResults && resultCount >= options.maxResults) {
                limitHit = true;
                return;
              }
            }
          } else {
            // Plain text search
            let startIndex = 0;
            let matchIndex: number;
            while (
              (matchIndex = searchLine.indexOf(searchString, startIndex)) !==
                -1 &&
              !limitHit &&
              !token.isCancellationRequested
            ) {
              progress.report({
                uri: fileUri,
                ranges: new vscode.Range(
                  lineNumber,
                  matchIndex,
                  lineNumber,
                  matchIndex + searchString.length,
                ),
                preview: {
                  text: line,
                  matches: new vscode.Range(
                    0,
                    matchIndex,
                    0,
                    matchIndex + searchString.length,
                  ),
                },
              });
              resultCount++;
              if (options.maxResults && resultCount >= options.maxResults) {
                limitHit = true;
                return;
              }
              startIndex = matchIndex + 1;
            }
          }
        }
      } catch {
        // Ignore errors for unreadable files (e.g., binary files)
      }
    };

    const searchInFolder = async (folderPath: string): Promise<void> => {
      if (token.isCancellationRequested || limitHit) {
        return;
      }

      try {
        const entries = await fs.readdir(folderPath);
        for (const entry of entries) {
          if (token.isCancellationRequested || limitHit) {
            return;
          }

          const entryPath = path.join(folderPath, entry);
          const stat = await fs.stat(entryPath);

          if (stat.isDirectory()) {
            await searchInFolder(entryPath);
          } else if (stat.isFile()) {
            await searchInFile(entryPath);
          }
        }
      } catch {
        // Ignore errors for inaccessible directories
      }
    };

    for (const folder of options.includes || []) {
      if (token.isCancellationRequested || limitHit) {
        break;
      }
      const folderPath = folder.path || "/";
      await searchInFolder(folderPath);
    }

    // If no includes specified, search from root
    if (!options.includes || options.includes.length === 0) {
      await searchInFolder("/");
    }

    return { limitHit };
  }
}
