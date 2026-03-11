"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Slider.init(
    {
      title: DataTypes.STRING,     
      sub_title: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Slider",
      tableName: "sliders",
    },
  );
  return Slider;
};
