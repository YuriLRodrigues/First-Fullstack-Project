const express = require("express");
const UserModel = require("./models/user.model");
const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/users', async (req, res)=> {
  try {
    const {firstName, email} = req.body
    const allUsers = await UserModel.find()
    const verifyUser = allUsers.filter((user)=> user.firstName === firstName || user.email === email)
    if (verifyUser.length === 0){
      const user = await UserModel.create(req.body)
      return res.status(201).json(user)
    }
    res.status(500).send(`O usuário ${firstName} ou o e-mail ${email} já existe em nosso sistema`)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.delete('/users/deletebyname/:firstName', async (req, res) => {
  try {
    const firstName = req.params.firstName
    const user = await UserModel.findOneAndDelete({firstName}, {new: true})
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router;
