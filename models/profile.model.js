module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    // hồ sơ nv
    profileId: {
      // ~ id nv
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    code: {
      // ! Mã nhân viên 
      type: Sequelize.STRING,
    },
    fullname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Gender: {
      // ! 1 male - 2 female - undf = gay
      type: Sequelize.BOOLEAN,
      //true is male
    },
    // department: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // position: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    phonenumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Profile;
};
