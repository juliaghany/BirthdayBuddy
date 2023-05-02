const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const Receiver = require('./Receiver');
const sequelize = require('../config/connection');

// initialize Gift model 
class Gift extends Model { }

Gift.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Receiver,
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'gift'
    }
);