"use strict";
const { Model } = require("sequelize");
const { PriceStatus } = require("../constants/enums/PriceStatus.enum");
const { YesNoStatus } = require("../constants/enums/YesNoStatus.enum");

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
      // associations future এ লাগলে এখানে দিবেন
    }
  }

  Price.init(
    {
      image: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_title: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: PriceStatus.Monthly,
      },

      is_popular: {
        type: DataTypes.INTEGER,       
        defaultValue: YesNoStatus.No,
      },

      points: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Price",
      tableName: "prices",
    },
  );

  return Price;
};
