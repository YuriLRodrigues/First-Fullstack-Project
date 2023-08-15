const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bnkydid.mongodb.net/`
    )
    .then((res) => console.log(`Banco acessado`))
    .catch((err) => console.log(`Impossível acessar o banco. ${err}`));
};

module.exports = connectToDB;
