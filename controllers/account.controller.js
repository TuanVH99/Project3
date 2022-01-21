const db = require("../models");
const Account = db.Account;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var key = "IAMWIBU";

const controller = {};
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

module.exports = controller;
