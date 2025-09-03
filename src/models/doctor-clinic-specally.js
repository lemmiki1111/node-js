"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctorc_linic_specally extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctorc_linic_specally.init(
    {
      doctorId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      specallyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "doctorc_linic_specally",
    }
  );
  return doctorc_linic_specally;
};
