module.exports = (sequelize, Sequelize) => {
  // tài khoản đăng nhập hệ thống, dc cấp
  const Account = sequelize.define("account", {
    accountId: {
      // id tài khoản
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    account: {
      // tk đăng nhập
      type: Sequelize.STRING(16),
      allowNull: false,
      unique: true,
    },
    password: {
      // mk
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullname: {
      // họ tên
      type: Sequelize.STRING,
      allowNull: false,
    },
    // department: {
    //   // phòng ban
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // position: {
    //   // vị trí công việc
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    phonenumber: {
      // sdt
      type: Sequelize.STRING,
      
    },
    description: {
      // mô tả thêm
      type: Sequelize.STRING,
    },
    avatar: {
      // link avt
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:"NVQL"
    },
  });
  return Account;
};
