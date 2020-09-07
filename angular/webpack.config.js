const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

console.log(__dirname);
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    path: resolve(__dirname, buildFolder),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: "@ngtools/webpack",
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular-app",
      library: { type: "var", name: "angular-app" },
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/Component",
      },
      shared: ["react", "react-dom"],
    }),
    new AngularCompilerPlugin({
      entryModule: "./src/app.module#AppModule",
      skipCodeGeneration: true,
      directTemplateLoading: false,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
