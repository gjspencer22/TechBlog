const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class comment extends model {}



comment.init( 
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)