const express = require("express");

const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./database/connect");
dotenv.config();
const router = require("./express");
connectToDB();

app.use(express.json());
app.use(cors());
app.use("/", router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando com express na porta ${port}`);
});
