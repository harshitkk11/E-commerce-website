const mongoose = require("mongoose");
const validator = require("validator")

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value);
      }
    },
    password: {
      type: String,
      required: true,
    },
    is_verified: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
