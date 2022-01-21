module.exports = (sequelize, Sequelize) => {
  const Experience = sequelize.define("work_experience", {
    // kinh nghiệm làm việc
    start: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATEONLY,
    },
    address: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Experience;
};
