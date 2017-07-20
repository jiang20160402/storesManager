// db.js

import Sequelize from 'sequelize'

exports.Todolist = new Sequelize('database', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})
