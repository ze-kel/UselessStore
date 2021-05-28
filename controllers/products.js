const DB = require("../db/productsDB");

const productsRouter = require("express").Router();

productsRouter.get("/", async (request, response) => {
  const offset = Number(request.query.offset) || 0;
  const limit = Number(request.query.limit) || 100;
  response.json(DB.slice(offset, offset + limit));
});

productsRouter.get("/dbSize", async (request, response) => {
  response.json(DB.length);
});

productsRouter.get("/:id", async (request, response) => {
  console.log("LOOKING FOR ID", request.params.id);
  const result = DB.find((item) => item.id === request.params.id);
  if (result) {
    response.json(result);
  } else {
    response.status(404).end();
  }
});

module.exports = productsRouter;
