const app = require("express")();
const db = require("./models/index.js");
const log4js = require("log4js");

const logger = log4js.getLogger("ejs");
logger.level = "DEBUG";

app.set("view engine", "ejs");
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
