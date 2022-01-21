module.exports = (sequelize, Sequelize) => {
  const LeaveApplication = sequelize.define("leave_application", {
    // đơn xin nghỉ
    applicationCode: {
      // ! mã: dnn + ngày + id
      type: Sequelize.STRING,
    },
    start: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    reason: {
      // lí do nghỉ
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      // ! ['chưa thực hiện', 'đang thực hiện', 'đã thực hiện']
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return LeaveApplication;
};
