module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("hello");
  });
  const accountRoute = require("./account.routes");
  app.use(accountRoute);
};
