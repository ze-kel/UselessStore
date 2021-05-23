const DB = require("../db/products");

const prodcutsRouter = require("express").Router();

prodcutsRouter.get("/", async (request, response) => {
  response.json(DB);
});

prodcutsRouter.get("/:id", async (request, response) => {
  console.log("LOOKING FOR ID", request.params.id);
  const result = DB.find((item) => item.id === request.params.id);
  if (result) {
    response.json(result);
  } else {
    response.status(404).end();
  }
});

module.exports = prodcutsRouter;
