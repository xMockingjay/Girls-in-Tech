'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Addresses,
        Brands,
        Merchants,
        OpeningHours,
        Services
      } = models;

      Merchants.belongsTo(Brands, { foreignKey: 'brand_id'} )
      Merchants.belongsToMany(Services, 
        { 
          through: 'Merchant_Services',
          as: 'services',
          foreignKey: 'merchant_id'
        } 
      );
      Merchants.hasOne(Addresses, 
        {
          foreignKey: 'merchant_id'
        } 
      );
      Merchants.hasOne(OpeningHours, { foreignKey: 'merchant_id'} );
    }
  }
  Merchants.init({
    name: DataTypes.STRING,
    isBrand: DataTypes.BOOLEAN,
    averageTicket: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Merchants',
  });
  return Merchants;
};