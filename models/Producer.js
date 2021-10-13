const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Producer extends Model {
   
    
  }

  Producer.init(
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      
      producer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    producer_goods: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    consumer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'consumer',
        key: 'id',
      },
    },

  },
  {  
  sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'producer',
    }
     
)

module.exports = Producer;

