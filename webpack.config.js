const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoader = require("vue-loader");

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


const imageOptimization = mode === "production" ? [
  {
    loader: "webpack-image-resize-loader",
    options: {
      width: 1000,
    },
  },
] : []

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
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset",
        use: imageOptimization
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "/src/styles/Variables.scss"; `,
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
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  plugins: [
    ...additionalPlugins,
    new MiniCssExtractPlugin(),
    new VueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({ title: "USLS", template: "index.html" }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
