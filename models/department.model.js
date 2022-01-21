module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define("department", {
    // phòng ban
    name: {
      // tên đầy đủ pb
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      // ! mã pb trên thực tế: PB + stt + viết tắt
      type: Sequelize.STRING,
    },
    description: {
      // mô tả thêm
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Department;
};
