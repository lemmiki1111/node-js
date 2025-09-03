const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize("vithanh001", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
  logging:false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
