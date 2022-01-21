const config = require("./config.db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  port: config.port,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//--------models--------

db.Account = require("./account.model")(sequelize, Sequelize);
db.Profile = require("./profile.model")(sequelize, Sequelize);
db.LaborContract = require("./laborContract.model")(sequelize, Sequelize);
db.CarContract = require("./carContract.model")(sequelize, Sequelize);
db.LeaveApplication = require("./leaveApplication.model")(sequelize, Sequelize);
db.Report = require("./report.model")(sequelize, Sequelize);

db.Identification = require("./identification.model")(sequelize, Sequelize);
db.Household = require("./household.model")(sequelize, Sequelize);
db.Experience = require("./experience.model")(sequelize, Sequelize);
db.Diploma = require("./diploma.model")(sequelize, Sequelize);

db.Department = require("./department.model")(sequelize, Sequelize);
db.Position = require("./position.model")(sequelize, Sequelize);

//--------relationships--------
// hồ sơ và thông thông tin cccd/cmnd/hộ chiếu
db.Profile.hasMany(db.Identification, {
  foreignKey: "profileId",
});
db.Identification.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và hộ khẩu
db.Profile.hasOne(db.Household, {
  foreignKey: "profileId",
});
db.Household.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và kinh nghiệm làm việc
db.Profile.hasMany(db.Experience, {
  foreignKey: "profileId",
});
db.Experience.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và bằng cấp
db.Profile.hasMany(db.Diploma, {
  foreignKey: "profileId",
});
db.Diploma.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và báo cáo sự cố
db.Profile.hasMany(db.Report, {
  foreignKey: "profileId",
});
db.Report.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và đơn xin nghỉ
db.Profile.hasMany(db.LeaveApplication, {
  foreignKey: "profileId",
});
db.LeaveApplication.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và hợp đồng lao động
db.Profile.hasMany(db.LaborContract, {
  foreignKey: "profileId",
});
db.LaborContract.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// hồ sơ và hợp đồng (thuê/mượn) xe
db.Profile.hasMany(db.CarContract, {
  foreignKey: "profileId",
});
db.CarContract.belongsTo(db.Profile, {
  foreignKey: "profileId",
});

// tài khoản (nvql) và phòng ban
db.Account.belongsTo(db.Department, {
  foreignKey: "deptId",
});
db.Department.hasOne(db.Account, {
  foreignKey: "deptId",
});

// tài khoản (nvql) và vị trí công việc
db.Account.belongsTo(db.Position, {
  foreignKey: "posId",
});
db.Position.hasOne(db.Account, {
  foreignKey: "posId",
});

// tài khoản tạo báo cáo
db.Account.hasMany(db.Report, {
  foreignKey: "creator",
});
db.Report.belongsTo(db.Account, {
  foreignKey: "creator",
});

// tài khoản tạo đơn xin nghỉ
db.Account.hasMany(db.LeaveApplication, {
  foreignKey: "creator",
});
db.LeaveApplication.belongsTo(db.Account, {
  foreignKey: "creator",
});

// tài khoản tạo hợp đồng lao động
db.Account.hasMany(db.LaborContract, {
  foreignKey: "creatorId",
});
db.LaborContract.belongsTo(db.Account, {
  foreignKey: "creatorId",
});
// tài khoản tạo hợp đồng xe
db.Account.hasMany(db.CarContract, {
  foreignKey: "creatorId",
});
db.CarContract.belongsTo(db.Account, {
  foreignKey: "creatorId",
});

//--------initialize--------
db.StatusLeave = ["Chưa thực hiện", "Đang thực hiện", "Đã thực hiện"];
db.StatusReport = ["Chưa xử lý", "Đang xử lý", "Đã xử lý"];
db.Roles = ["QTV", "NVQL"];
db.IdTypes = ["CMND", "CCCD", "Hộ chiếu"];
db.Genders = ["Nam", "Nữ", "Không xác định"];
db.AdminAccount = {
  account: "admin",
  password: "admin",
  fullname: "Tài khoản QTV",
  role: db.Roles[0],
};
//---------functions--------
db._setProfileCode = () => {};
db._setCarContractCode = () => {};
db._setLaborContractCode = () => {};
db._setLeaveAppCode = () => {};
db._setReportCode = () => {};

//--------------------------
module.exports = db;
