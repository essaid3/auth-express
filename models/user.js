const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nom: {
      type: String,
    },
    prenom: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);

module.exports = user;
