
const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const listRouter = require("./app/routes/list.routes");

const app = express();


var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

const db = require("./app/models");


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.post("/", (req, res) => {
  const name = req.body.name;
  res.json({ message: "Welcome "+ name });
});

app.use('/list', listRouter);


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
