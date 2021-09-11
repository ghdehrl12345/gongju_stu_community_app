const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./router/userRouter");
const boardRouter = require("./router/boardRouter");

const app = express();
const PORT = 5000;

app.use(morgan(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res, next) => {
  res.render("signup");
});

app.use("/api/user", userRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log("Backend Server Start , http://localhost:5000");
});
