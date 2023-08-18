const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const UserModel = require("./models/user.model");
const router = express.Router();

router.post("/usersregister", async (req, res) => {
  try {
    if (
      req.body.password === process.env.PASSWORD &&
      req.body.user === process.env.USER
    ) {
      const users = await UserModel.find();
      res.status(200).json(users);
    } else {
      res.status(401).send('Não autorizado')
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/users", async (req, res) => {
  try {
    const { firstName, email } = req.body;
    const allUsers = await UserModel.find();
    const verifyUser = allUsers.filter(
      (user) => user.firstName === firstName || user.email === email
    );
    if (verifyUser.length === 0) {
      const user = await UserModel.create(req.body);
      return res.status(201).json(user);
    }
    res
      .status(500)
      .send(
        `O usuário ${firstName} ou o e-mail ${email} já existe em nosso sistema`
      );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/users", async (req, res) => {
  try {
    const { email, password, firstName } = req.body;
    const user = await UserModel.findOneAndDelete(
      { email, password, firstName },
      { new: true }
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/users/update", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
