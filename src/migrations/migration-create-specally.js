"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Specialists", {
      id: {
        allowNull: false, // không cho phép null
        autoIncrement: true, // tự tăng khi thêm record mới
        primaryKey: true, // khóa chính
        type: Sequelize.INTEGER.UNSIGNED, // hoặc Sequelize.INTEGER, khai báo số nguyên k âm
      },

      description: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Specialists");
  },
};
