const DB = require("../db/productsDB");

const ordersRouter = require("express").Router();

ordersRouter.post("/", async (request, response) => {
  const body = request.body;
  console.log(body);

  response.status(200).send("ORDER CREATED");
});

module.exports = ordersRouter;
