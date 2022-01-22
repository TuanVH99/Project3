const router = require("express").Router();
const controller = require("../controllers/account.controller");

router.get("/login", (req, res) => {
  res.render("pages/login", {
    message: 1,
    accountOk: 1,
    passwordOk: 1,
  });
});

router.get("/initialize/admin", controller.initializeAdmin);
router.post("/login", controller.login);

module.exports = router;
