require('dotenv').config();
require("./config/dbConnection");

const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose");
const path = require('path')
const cors = require("cors");
const {readdirSync} = require('fs')
//app
const app = express();

//middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(logger('dev'));
app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({ limit: '200mb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes middleware
readdirSync("./routes").map((route) =>
    app.use("/api", require("./routes/"+route))
)

//deploy on Heroku
if (process.env.NODE_ENV === "production") {
    app.use("*", (req, res, next) => {
         // If no routes match, send them the React HTML.
         res.sendFile(__dirname + "/public/index.html");
    });
}

//port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Sever is running on port ${port}`))