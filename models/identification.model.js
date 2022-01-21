module.exports = (sequelize, Sequelize) => {
  const Identification = sequelize.define("identification", {
    // thông tin id
    idNumber: {
      // số id
      type: Sequelize.STRING,
      allowNull: false,
    },
    place: {
      // nơi cấp
      type: Sequelize.STRING,
    },
    issued: {
      // ngày cấp
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    expired: {
      // hết hạn
      type: Sequelize.DATEONLY,
    },
    type: {
      // ! ['cmnd - identify card','citizen identification ~ cccd','passport ~ hộ chiếu']
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Identification;
};
