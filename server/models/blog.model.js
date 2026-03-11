"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Blog.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
        // onDelete: "CASCADE",
      });
    }
  }
  Blog.init(
    {
      category_id: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,     
        unique: true,
      },
      image: DataTypes.STRING,
      short_description: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Blog",
      tableName: "blogs",
    },
  );
  return Blog;
};
