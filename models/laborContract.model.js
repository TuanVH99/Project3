module.exports = (sequelize, Sequelize) => {
  const LaborContract = sequelize.define("labor_contract", {
    // hợp đồng lao động
    contractNumber: {
      // ! số hợp đồng: hdld + ngày + bộ phận + 4 số cuối mã nv
      type: Sequelize.STRING,
      // allowNull: false,
      // primaryKey: true,
      unique: true,
    },
    fullname: {
      // họ và tên
      type: Sequelize.STRING,
      allowNull: false,
    },
    // department: {
    //   // phòng ban
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // position: {
    //   // vị trí
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    description: {
      // mô tả
      type: Sequelize.STRING,
    },
    apprentice: {
      // học việc - thử việc?
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    start: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    basicSalary: {
      // lương cơ bản
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    coefficients: {
      // hệ số lương
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    allowance: {
      // phụ cấp - hệ số
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    represent: {
      // đại diện cty làm hợp đồng
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return LaborContract;
};
