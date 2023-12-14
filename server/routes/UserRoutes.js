const express = require("express");

const {
  Signup,
  verifyMail,
  Login,
  verifyToken,
  getUser,
  logout,
} = require("../controllers/UserController");
const { verifyMailer } = require("../controllers/MailController");

const router = express.Router();

router.post("/signup", Signup, verifyMailer);
router.post("/verify", verifyMail);
router.post('/login', Login, verifyToken, getUser)
router.get('/user', verifyToken, getUser)
router.post('/logout', verifyToken, logout)

module.exports = router;
