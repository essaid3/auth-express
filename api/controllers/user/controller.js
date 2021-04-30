const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  const { nom, prenom, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      nom,
      prenom,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "Successfully created",
      data: newUser,
    });
  } catch (error) {
    console.log("Error signupUser =>", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const loginUser = (req, res) => {
  console.log("login");
};

const getInfoUser = (req, res) => {};

module.exports = {
  signupUser,
  loginUser,
  getInfoUser,
};
