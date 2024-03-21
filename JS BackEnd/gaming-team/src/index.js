const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const handlebars = require("express-handlebars");

const path = require("path");
const app = express();
const router = require("./router");
const { auth } = require('./middlewares/authMiddleware')

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

mongoose
  .connect("mongodb://127.0.0.1:27017/gaming-team")
  .then(() => console.log("DB connected succesfully"))
  .catch((err) => console.log("DB Error", err.message));

app.use(cookieParser())
app.use(auth)
app.use(router);

app.listen(4000, console.log("Server is listening on port 4000..."));
