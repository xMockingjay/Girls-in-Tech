'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpeningHours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        Merchants,
        OpeningHours
      } = models;

      OpeningHours.belongsTo(Merchants, { foreignKey: 'merchant_id'} );
    }
  }
  OpeningHours.init({
    days: DataTypes.STRING,
    open: DataTypes.TIME,
    close: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'OpeningHours',
  });
  return OpeningHours;
};