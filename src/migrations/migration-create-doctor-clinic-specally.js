"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("doctorc_linic_specally", {
      id: {
        allowNull: false, // không cho phép null
        autoIncrement: true, // tự tăng khi thêm record mới
        primaryKey: true, // khóa chính
        type: Sequelize.INTEGER.UNSIGNED, // hoặc Sequelize.INTEGER, khai báo số nguyên k âm
      },

      doctorId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      specallyId: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("doctorc_linic_specally");
  },
};
