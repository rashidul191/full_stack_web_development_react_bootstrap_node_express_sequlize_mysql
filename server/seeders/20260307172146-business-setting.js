"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // আপনার default business settings
    const settings = {
      company_name: "MERN Stack Project",
      phone: "01711111111",
      whatsapp: "01234567895",
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
      copyright_text: "MERN Stack Project",
    };

    // array বানানো, যেখানে প্রতিটা key-value object হবে
    const seedData = Object.keys(settings).map((key) => ({
      key: key,
      value: settings[key],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // insert into database
    await queryInterface.bulkInsert("business-settings", seedData, {});
  },

  async down(queryInterface, Sequelize) {
    // clear all business settings
    await queryInterface.bulkDelete("business-settings", null, {});
  },
};
