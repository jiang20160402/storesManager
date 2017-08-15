/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soso_product', {
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
    supplier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    repository_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    technic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    pattern_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    shape_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    brand_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    itemcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    purchase_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    selling_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    additional_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    current_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    alert_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    litpic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    piclist: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addtime: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    modtime: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'soso_product'
  });
};
