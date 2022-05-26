'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Brands,
        Categories,
        Merchants
      } = models;

      Brands.belongsToMany(Categories, 
        { 
          through: 'Brand_Categories',
          as: 'categories',
          foreignKey: 'brand_id'
        } 
      );
      Brands.hasMany(Merchants, { foreignKey: 'brand_id'} );

    }
  }
  Brands.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};