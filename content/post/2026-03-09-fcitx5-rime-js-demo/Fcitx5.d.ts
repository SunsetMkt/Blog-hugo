import type * as UZIP from 'uzip'

type Child = ({
  Description: string
  Option: string
  Type: string
  Value: string
} & ({
  Children: null
  DefaultValue: any
} | {
  Children: Child[]
}) & { [key: string]: any })

export type Config = {
  Children: Child[]
} | {
  ERROR: string
}

export interface MenuAction {
  id: number
  desc: string
  checked?: boolean
  separator?: boolean
  children?: MenuAction[]
}

interface AddonCategory {
  addons: {
    comment: string
    id: string
    name: string
  }[]
  id: number
  name: string
}

interface FS {
  isDir: (mode: number) => boolean
  lstat: (path: string) => { mode: number }
  mkdir: (path: string) => void
  mkdirTree: (path: string) => void
  mount: (type: any, opts: { autoPersist?: boolean }, mountpoint: string) => void
  readFile: {
    (path: string): Uint8Array
    (path: string, options: { encoding: 'utf8' }): string
  }
  readdir: (path: string) => string[]
  rmdir: (path: string) => void
  symlink: (target: string, path: string) => void
  syncfs: (populate: boolean, callback: (err: any) => void) => void
  unlink: (path: string) => void
  writeFile: (path: string, data: Uint8Array | string) => void
}

type WASM_TYPE = 'void' | 'bool' | 'number' | 'string'

export interface EM_MODULE {
  ccall: (name: string, retType: WASM_TYPE, argsType: WASM_TYPE[], args: any[]) => any
  locateFile: (file: string) => string
  onRuntimeInitialized: () => void
  FS: FS
  IDBFS: any
}

export type SyncCallback = (path: string) => void
export type AsyncCallback = (path: string) => Promise<void> | void
export type NotificationCallback = (name: string, icon: string, body: string, timeout: number, tipId: string, actions: { id: string, text: string }[]) => void

export interface KeyData {
  type: string
  key: string
  code: string
  shiftKey?: boolean
  altKey?: boolean
  ctrlKey?: boolean
  metaKey?: boolean
  isComposing?: boolean
  getModifierState: (modifier: string) => boolean
  preventDefault: () => void
}

export interface FCITX {
  // Return value is for ChromeOS.
  enable: () => { keyEvent: (keyData: KeyData) => boolean } | undefined
  // ChromeOS only.
  commit: (text: string) => void
  // ChromeOS only.
  setPreedit: (text: string, index: number) => void
  disable: () => void
  getLanguageName: (code: string) => string
  currentInputMethod: () => string
  setCurrentInputMethod: (im: string) => void
  getInputMethods: () => { name: string, displayName: string }[]
  setInputMethods: (ims: string[]) => void
  getAllInputMethods: () => { name: string, displayName: string, languageCode: string }[]
  setInputMethodsCallback: (callback: () => void) => void
  updateInputMethods: () => void
  setStatusAreaCallback: (callback: () => void) => void
  updateStatusArea: () => void
  getConfig: (uri: string) => Config
  setConfig: (uri: string, json: object) => void
  getAddons: () => AddonCategory[]
  jsKeyToFcitxString: (event: KeyboardEvent) => string
  getMenuActions: () => MenuAction[]
  activateMenuAction: (id: number) => void
  installPlugin: (buffer: ArrayBuffer) => string
  getInstalledPlugins: () => string[]
  unzip: (buffer: ArrayBuffer, dir: string) => void
  rmR: (path: string) => void
  traverseSync: (preDirCallback: SyncCallback | undefined, fileCallback: SyncCallback, postDirCallback: SyncCallback | undefined) => (path: string) => void
  traverseAsync: (preDirCallback: AsyncCallback | undefined, fileCallback: AsyncCallback, postDirCallback: AsyncCallback | undefined) => (path: string) => Promise<void>
  utf8Index2JS: (text: string, index: number) => number
  setNotificationCallback: (callback: NotificationCallback) => void
  // Only for proxying rime notifications from worker, if not called from C++.
  notify: (name: string, icon: string, body: string, timeout: number, tipId: string, actionString?: string) => void
  activateNotificationAction: (action: string, tipId?: string) => void
  translateDomain: (domain: string, text: string) => string
  setSystemInputMethodInUseCallback: (callback: () => void) => void
  reload: () => void
  reset: () => Promise<any>
  zip: (manifest: UZIP.UZIPFiles) => Promise<ArrayBuffer>
  Module: EM_MODULE
  UZIP: typeof UZIP
}

export const fcitxReady: Promise<null>
export function loadZip(url: string): Promise<void>
