const express = require("express");
const helmet = require("helmet");
const path = require('path');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 3000


// middleware setting
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// setting routes

app.use('/user',userRoute)

app.listen( PORT, () => {
    console.log("server start on port ", PORT);
})

module.exports = app;
