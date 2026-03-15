"use strict";

const { PriceStatus } = require("../constants/enums/PriceStatus.enum");
const { YesNoStatus } = require("../constants/enums/YesNoStatus.enum");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("prices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      image: {
        type: Sequelize.STRING,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sub_title: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: PriceStatus.Monthly,
      },
      is_popular: {
        type: Sequelize.INTEGER,
        defaultValue: YesNoStatus.No,
      },
      points: {
        type: Sequelize.JSON,
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
    await queryInterface.dropTable("prices");
  },
};
