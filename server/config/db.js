// db.js

import Sequelize from 'sequelize'

exports.Todolist = new Sequelize('stores_manager', 'root', 'jxgsjk123!@#', {
    host: '118.89.182.76',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})
