const router = require("express").Router();
const controller = require("../controllers/account.controller");

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/initialize/admin", controller.initializeAdmin);

module.exports = router;
