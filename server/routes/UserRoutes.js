const express = require("express");

const { Signup, verifyMail } = require("../controllers/UserController");
const { verifyMailer } = require("../controllers/MailController");

const router = express.Router();

router.post("/signup", Signup, verifyMailer);
router.post("/verify", verifyMail);

module.exports = router;
