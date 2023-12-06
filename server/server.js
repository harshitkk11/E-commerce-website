require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ credentials: true, origin: process.env.ORIGIN_VALUE }));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// // Available Routes
app.use("/api", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db and Server is running on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
