const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
    open: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      //   {
      //     test: /bootstrap\.js$/,
      //     loader: "bundle-loader",
      //     options: {
      //       lazy: true,
      //     },
      //   },
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      library: { type: "var", name: "reactApp" },
      filename: "remoteEntry.js",
      remotes: {
        vueApp: "vueApp",
        angularApp: "angularApp",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
