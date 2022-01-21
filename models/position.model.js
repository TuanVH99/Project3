module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("position", {
    // vị trí
    name: {
      // tên vị trí
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      // ! mã vị trí: VT + stt + viết tắt
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Position;
};
