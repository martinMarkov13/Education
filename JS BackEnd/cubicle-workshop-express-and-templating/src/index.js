const express = require("express");

const expressConfig = require("./config/expressConfig")
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeController') // Router

const app = express();
const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)

// Routes
app.use(homeController)

app.listen(PORT, () => console.log("Server is running on port 5000..."));
