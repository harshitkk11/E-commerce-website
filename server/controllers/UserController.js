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
        fname : name.split(" ")[0],
        lname : name.split(" ")[1],
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
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const verifyMail = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Something Went wrong" });
  }

  try {
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, async(err, user) => {
      if (err) {
        return res.status(400).json({ message: "Link Expired" });
      }
      const updateuser = await User.findByIdAndUpdate(
        { _id: user.id },
        { $set: { is_verified: 1 } }
      );
      if (updateuser) {
        return res.status(200).json({ message: "Email verified" });
      }
      else {
        return res.status(400).json({message: "Link Expired"})
      }
    }
    )
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password);

      if (!checkPassword) {
        return res.status(200).json({ message: "Invalid Email / Password" });
      }

      if (user.is_verified === 1) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });

        if (req.cookies[`${user._id}`]) {
          req.cookies[`${user._id}`] = "";
        }

        res.cookie(String(user._id), token, {
          // path: "/",
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
          // sameSite: "none",
          // secure: true,
        });

        return res.status(200).json({ message: "Logged in successfully" });
      }

      // if user email is not verified for more than 2 days
      else if (user.is_verified === 0) {
        const dateInitial = new Date(user.createdAt);
        const dateFinal = new Date(Date.now());
        const hours = (dateFinal - dateInitial) / (1000 * 3600);

        if (hours > 72) {
          await User.deleteOne({ _id: user._id });
          return res.status(200).json({ message: "Invalid Email / Password" });
        }

        return res.status(200).json({ message: "Not verified" });
      }
    } else {
      return res.status(200).json({ message: "Invalid Email / Password" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const verifyToken = (req, res, next) => {
  try {
    const cookies = req.headers.cookie; //req.cookies.auth_token // get generated cookie
    const token = cookies.split("=")[1]; //get token from cookie

    if (!token) {
      return res.status(400).json({ message: "Token not found" });
    }
    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Token" });
      }
      req.id = user.id;
    });
    next();
  } catch (error) {
    return res.status(400);
  }
};

const getUser = async (req, res) => {
  const userId = req.id;

  try {
    const user = await User.findById(userId, "-password -is_verified -createdAt -updatedAt");

    if (!user) {
      return res.status(400).json({ message: "Unable to find user" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    const userId = req.id;

    res.clearCookie(`${userId}`);
    req.cookies[`${userId}`] = "";
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  Signup,
  verifyMail,
  Login,
  verifyToken,
  getUser,
  logout,
};
