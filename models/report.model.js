module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define("report", {
    // báo cáo sự cố
    reportCode: {
      // ! bcsc + ngày + id
      type: Sequelize.STRING,
    },
    name: {
      // tên sự cố / mô tả = tên
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      // mô tả
      type: Sequelize.STRING,
      allowNull: false,
    },
    decision: {
      // ! quyết định ['nhân viên bồi thường', 'đến bù nhân viên', 'không']
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      // ! trạng thái xử lý  ['chưa thực hiện', 'đang thực hiện', 'đã thực hiện']
      type: Sequelize.INTEGER,
      allowNull: false,
      default: "1",
    },
  });
  return Report;
};
