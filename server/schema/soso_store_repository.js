/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soso_store_repository', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    store_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkman: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'soso_store_repository'
  });
};
