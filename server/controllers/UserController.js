const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const isexist = await User.findOne({ email });

    if (!isexist) {
      //   console.log(name, email, password);
      const hashedpassword = bcrypt.hashSync(password);

      const createUser = new User({
        name,
        email,
        password: hashedpassword,
      });
      const saveUser = await createUser.save();

      if (saveUser) {
        next();
      } else {
        return res.status(200).json({ message: "Something went wrong" });
      }
    } else {
      console.log(isexist);
      res.status(200).json({ message: "Email Already Exist" });
    }
  } catch (err) {
    return res.status(400).json({ err });
  }
};

const verifyMail = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { $set: { is_verified: 1 } }
    );
    if (user) {
      return res.status(200).json({ message: "Email verified" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  Signup,
  verifyMail,
};
