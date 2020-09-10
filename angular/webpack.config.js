const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { AngularCompilerPlugin } = require("@ngtools/webpack");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    mainFields: ["browser", "module", "main"],
  },
  mode: "production",
  output: {
    publicPath: "http://localhost:4200/",
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 4200,
  },
  module: {
    rules: [
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
      name: "angularApp",
      library: { type: "var", name: "angularApp" },
      filename: "remoteEntry.js",
      remotes: {
        vueApp: "vueApp",
      },
      exposes: {
        "./Component": "./src/app.component.ts",
        "./Module": "./src/app.module.ts",
      },
      shared: [],
    }),
    new ProgressPlugin(),

    new AngularCompilerPlugin({
      tsConfigPath: "./tsconfig.json",
      skipCodeGeneration: true,
      directTemplateLoading: false,
      entryModule: "./src/app.module#AppModule",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
