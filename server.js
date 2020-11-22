const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());


//server is gonna parse the json thats it 

// // get list of posts
app.get("/", (req, res) => {
  fs.promises.readdir().then(files => {
    res.send(
      
      JSON.stringify(files));
  });
});


// Server listener
app.listen(process.env.PORT);
console.log("Your app is listening on port " + process.env.PORT);
