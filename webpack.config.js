const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoader = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}
const additionalPlugins =
  mode === "production" ? [] : [new webpack.HotModuleReplacementPlugin()]; // Enable hot module replacement

const additionalEntries =
  mode === "production"
    ? []
    : ["webpack-hot-middleware/client?http://localhost:8000"];

module.exports = {
  mode: mode,
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
  entry: ["./src", ...additionalEntries],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "/src/styles/_variables.scss";`,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({ title: "USLS", template: "index.html" }),
    ...additionalPlugins,
  ],

  //devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
