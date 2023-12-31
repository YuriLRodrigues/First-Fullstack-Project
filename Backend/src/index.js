const express = require("express");

const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./database/connect");
dotenv.config();
const router = require("./express");
connectToDB();

app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, PATCH");
  next();
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/", router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando com express na porta ${port}`);
});
