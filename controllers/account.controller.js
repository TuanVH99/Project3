const db = require("../models");
const Account = db.Account;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var key = "IAMWIBU";

const controller = {};

controller._verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    console.log(req);
    return res.status(403).send({
      message: "Token không phù hợp",
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Token không xác định!",
      });
    }
    req.userId = decoded.userid;
    next();
  });
};

controller.initializeAdmin = async (req, res) => {
  try {
    const data = db.AdminAccount;
    const result = await Account.create({
      ...data,
      password: bcrypt.hashSync(data.password, 8),
    });
    if (!result) {
      throw new Error("Lỗi không xác định");
    }
    res.json({ message: "Create account successfully!", data: result });
  } catch (error) {
    res.status(500).json({
      message: "Tạo tài khoản admin thất bại",
      messageDev: error.message,
    });
  }
};

controller.login = async (req, res) => {
  Account.findOne({
    where: {
      account: req.body.account,
    },
  })
    .then((account) => {
      if (!account) {
        return res.render("pages/login", {
          message: "Không tìm thấy tài khoản!",
          accountOk: 0,
          passwordOk: 1,
        });
      }
      var passIsValid = bcrypt.compareSync(req.body.password, account.password);

      if (!passIsValid) {
        return res.render("pages/login", {
          message: "Sai mật khẩu",
          accountOk: 1,
          passwordOk: 0,
        });
      }

      var token = jwt.sign({ accountId: Account.accountId }, key, {
        expiresIn: 86400,
      });

      return res.render("pages/homepage", { token: token });
    })
    .catch((err) => {
      res.render("pages/login", {
        message: err.message,
        accountOk: 0,
        passwordOk: 0,
      });
    });
};

module.exports = controller;
