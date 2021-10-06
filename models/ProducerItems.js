const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ProducerItems extends Model {

}
ProducerItems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        items_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Items',
                key: 'id',
              },
        },

        producer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Producer',
                key: 'id',
              },
        },

        // consumer_balance: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defauleValue: 10,
        //     validate: {
        //         isNumeric: true,
        //     },
        // },

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'producer_items',
    }
);




module.exports = ProducerItems;