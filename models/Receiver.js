const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
// const Gift = require('./Gift');

// initialize Receiver model
class Receiver extends Model { }

Receiver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        // gift_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Gift,
        //         key: 'id'
        //     }
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: User,
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'receiver'
    }
);

module.exports = Receiver;