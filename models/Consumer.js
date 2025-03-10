const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Consumer extends Model {

}

Consumer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        consumer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        consumer_goods: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'consumer',
    }
);




module.exports = Consumer;