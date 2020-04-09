const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");
var cors_proxy = require('cors-anywhere');

app.use(express.static('public'));//use the static files in the public folder
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");//tell express where to get views and which template engine to use
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

const mongoDB = 
  "mongodb+srv://" +
  process.env.USERNAME +
  ":" +
  process.env.PASSWORD +
  "@" +
  process.env.HOST +
  "/" +
  process.env.DATABASE;
mongoose.connect(mongoDB, { useNewUrlParser: true, retryWrites: true });


// ----------Load routes to api-info and routes to page displays----------

const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use("/api/", apiRouter);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//----------------------------ROUTER-------------------------------------


const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});