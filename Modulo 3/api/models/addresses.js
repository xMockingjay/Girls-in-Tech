'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Addresses,
        Merchants
      } = models;

      Addresses.belongsTo(Merchants, { foreignKey: 'merchant_id'} );
    }
  }
  Addresses.init({
    postalCode: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};