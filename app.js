require('dotenv').config();
require("./config/dbConnection");

const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");
const {readdirSync} = require('fs')
//app
const app = express();

//middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes middleware
readdirSync("./routes").map((route) =>
    app.use("/api", require("./routes/"+route))
)

//port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Sever is running on port ${port}`))