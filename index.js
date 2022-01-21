const app = require("express")();
const db = require("./models/index.js");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

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

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
