const express = require("express");
const controller = require("./controller");
const userRouter = express.Router();

userRouter
  .post("/signup", controller.signupUser)
  .post("/login", controller.loginUser)
  .get("/info", controller.getInfoUser);

module.exports = userRouter;
