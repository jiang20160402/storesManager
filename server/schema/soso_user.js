/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soso_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logintime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    loginip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    litpic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'soso_user'
  });
};
