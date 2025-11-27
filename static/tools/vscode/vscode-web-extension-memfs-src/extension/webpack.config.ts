import * as path from "path";
import * as fs from "fs";
import * as webpack from "webpack";
import { EsbuildPlugin } from "esbuild-loader";

class CopyFilesPlugin implements webpack.WebpackPluginInstance {
  constructor(private files: string[]) {}
  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterEmit.tap("CopyFilesPlugin", () => {
      for (const file of this.files) {
        const src = path.resolve(__dirname, file);
        const dest = path.resolve(__dirname, "dist", path.basename(file));
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
      }
    });
  }
}

const webExtensionConfig: webpack.Configuration = {
  mode: "none", // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  target: "webworker", // extensions run in a webworker context
  entry: {
    extension: "./src/extension.ts", // source of the web extension main file
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    libraryTarget: "commonjs",
    devtoolModuleFilenameTemplate: "../../[resource-path]",
  },
  resolve: {
    mainFields: ["browser", "module", "main"], // look for `browser` entry point in imported node modules
    extensions: [".ts", ".js"], // support ts-files and js-files
    alias: {
      // provides alternate implementation for node module and source files
    },
    fallback: {
      // Webpack 5 no longer polyfills Node.js core modules automatically.
      // see https://webpack.js.org/configuration/resolve/#resolvefallback
      // for the list of Node.js core module polyfills.
      path: require.resolve("path-browserify"),
      buffer: require.resolve("buffer"),
      process: require.resolve("process/browser"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser", // provide a shim for the global `process` variable
      Buffer: ["buffer", "Buffer"], // provide a shim for the global `Buffer` variable
    }),
    new CopyFilesPlugin(["package.json", "package.nls.json"]),
    new EsbuildPlugin({
      minify: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
      legalComments: "none",
    }),
  ],
  externals: {
    vscode: "commonjs vscode", // ignored because it doesn't exist
  },
  performance: {
    hints: false,
  },
  devtool: "nosources-source-map", // create a source map that points to the original source file
};

export default [webExtensionConfig];
