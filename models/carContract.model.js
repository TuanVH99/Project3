module.exports = (sequelize, Sequelize) => {
  const CarContract = sequelize.define("car_contract", {
    // hợp đồng (mượn / thuê) xe
    contractNumber: {
      // ! số hợp đồng
      type: Sequelize.STRING,
      // allowNull: false,
      // primaryKey: true,
      unique: true,
    },

    description: {
      // mô tả
      type: Sequelize.STRING,
    },

    allowance: {
      // phụ cấp cho xe
      type: Sequelize.STRING,
      allowNull: false,
    },

    // tên xe
    vehicleName: { type: Sequelize.STRING },

    // nhãn hiệu
    brand: { type: Sequelize.STRING, allowNull: false },

    // model
    model: { type: Sequelize.STRING, allowNull: false },

    // loại xe: máy xúc, tô, vv
    type: { type: Sequelize.STRING, allowNull: false },

    // biểm ks
    controlPlate: { type: Sequelize.STRING, allowNull: false },

    // mô tả thêm về xe
    vehicleDescription: { type: Sequelize.STRING, allowNull: false },

    start: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },

    // người đại diện cty ký
    represent: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return CarContract;
};
