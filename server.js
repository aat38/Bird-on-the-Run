const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('public'));//use the static files in the public folder
app.set("views", __dirname + "/views/");//tell express where to get views and which template engine to use
app.set("view engine", "ejs");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 


//----------------------------ROUTES-------------------------------------

app.get('/', function(request, response) {
  response.render("index")
});



//----------------------------ROUTER-------------------------------------
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
