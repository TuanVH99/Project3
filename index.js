const express = require("express");
const app = express();
const db = require("./models/index.js");
const log4js = require("log4js");
var bodyParser = require("body-parser");
var cors = require("cors");
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/resetdb", (req, res) => {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Resync DB");
      res.send("DB sync");
    })
    .catch((err) => {
      console.log(err.message);
      res.send("DB Sync Fail!");
    });
});
require("./routes/index")(app);
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
