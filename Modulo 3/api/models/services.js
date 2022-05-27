'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Merchants,
        Services
      } = models;

      Services.belongsToMany(Merchants, 
        { 
          through: 'Merchant_Services',
          as: 'merchants',
          foreignKey: 'service_id'
        }
      );
    }
  }
  Services.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Services',
  });
  return Services;
};