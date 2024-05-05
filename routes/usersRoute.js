const express = require("express");
const router = express.Router();
const Users = require("../models/userModal");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new Users({ name, email, password });
  try {
    // const existingUser = await Users.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).send("User has already registered");
    // }

    await newUser.save();
    res.send("User created successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
