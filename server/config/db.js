// db.js

import Sequelize from 'sequelize'

exports.Todolist = new Sequelize('mysql://root:password@localhost/stores_manager', {
    define: {
        timestamps: false
    }
})
