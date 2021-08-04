const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blogPost extends model { }

blogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primartyKey: true,
            autoIncrement: true
        },
        blogPost_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost'
    }
);

model.exports = blogPost;