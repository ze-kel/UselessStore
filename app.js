const config = require("./utils/config");
const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

const productsRouter = require("./controllers/products");

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

if (process.env.NODE_ENV === "dev") {
  console.log("Starting hot reload mode");
  const webpack = require("webpack");
  const middleware = require("webpack-dev-middleware");
  const hotMiddleWare = require("webpack-hot-middleware");
  const webpackConf = require("./webpack.config");
  const compiler = webpack(webpackConf);

  const devMiddleware = middleware(compiler);
  app.use(devMiddleware);
  app.use(hotMiddleWare(compiler));

  const universalResponse = (req, res, next) => {
    const filename = path.join(compiler.outputPath, "index.html");
    console.log(filename);
    console.log("universal get");
    devMiddleware.waitUntilValid(() => {
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) return next(err);
        res.set("content-type", "text/html");
        res.send(result);
        return res.end();
      });
    });
  };
  app.use("/products", universalResponse);
  app.use("/", universalResponse);
  app.use("*", universalResponse);
} else {
  console.log("Starting static mode");

  const DIST_PATH = path.resolve(__dirname, "./dist");
  const INDEX_PATH = path.resolve(DIST_PATH, "index.html");

  app.use("/", express.static(DIST_PATH));
  app.use("/products", express.static(DIST_PATH));
  app.get("*", (req, res) => {
    console.log(req.url);
    console.log("universal get");
    console.log("index PATH", INDEX_PATH);
    res.sendFile(INDEX_PATH);
  });
}

module.exports = app;
