module.exports = (sequelize, Sequelize) => {
  const Household = sequelize.define("household", {
    // hộ khẩu
    nationality: {
      // quốc tịch
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "VIETNAM",
    },
    ethnic: {
      // dân tộc
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Kinh",
    },
    domicile: {
      // nguyên quán
      type: Sequelize.STRING,
    },
    address: {
      // địa chỉ hiện tại
      type: Sequelize.STRING,
    },
    city: {
      // thành phố
      type: Sequelize.STRING,
    },
  });
  return Household;
};
