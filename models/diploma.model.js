module.exports = (sequelize, Sequelize) => {
  const Diploma = sequelize.define("diploma", {
    // bằng cấp
    name: {
      // tên bằng cấp
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      // ! ['bằng đại học và ~ // degree ', 'chứng chỉ - certificate']
      type: Sequelize.STRING,
      allowNull: false,
    },
    placement: {
      // nơi cấp
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Diploma;
};
