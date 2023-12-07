const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const User = require("../models/UserModel")

var transporter = nodemailer.createTransport({
  service: "Outlook365",
  host: "smtp.office365.com",
  port: "587",
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

var mailGenerator = new Mailgen({
  theme: "default",
  product: {
    // Appears in header & footer of e-mails
    name: "E-commerce",
    link: "http://localhost:5173",
    // Optional product logo
    // logo: 'https://mailgen.js/img/logo.png'
  },
});


const verifyMailer = async (req, res) => {
    const { name, email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        var id = user._id;
      }
  
      var emailData = {
        body: {
          name: name,
          intro: "Thank you for signing up,",
          action: {
            instructions:
              "To get started, please click here to confirm your account:",
            button: {
              color: "#22BC66",
              text: "Confirm your account",
              link: "http://localhost:5173/verify?id=" + id + "",
            },
          },
        },
      };
  
      var emailBody = mailGenerator.generate(emailData);
  
      let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email verification",
        html: emailBody,
      };
  
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
          return res.status(200).json({
            message: "Signed up successfully",
          });
        }
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  module.exports = { verifyMailer };