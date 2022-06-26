import webpackNodeExternals from "webpack-node-externals";
import { Configuration } from "webpack"
import { resolve } from "path"

const { NODE_ENV } = process.env;

const config: Configuration = {
  entry: "./src/index.ts",
  output: {
    path:
      NODE_ENV === "production"
        ? resolve(__dirname, "build/release")
        : resolve(__dirname, "build/debug"),
    filename: 'index.bundle.js'
  },
  target: 'node',
  externals: [webpackNodeExternals()],
  resolve: {
    extensions: ['.js', '.ts', 'jsx', '.tsx'],
    modules: [
      "node_modules",
      'src'
    ],
    alias: {
      "@/*": [resolve(__dirname, "src/*")]
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

export default config