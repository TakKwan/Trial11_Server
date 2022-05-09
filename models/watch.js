'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Watch.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Watch.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    parkCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Watch',
    tableName: 'watches'
  });
  return Watch;
};