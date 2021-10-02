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

      producer_balance: {
        type: DataTypes.INTEGER,
      allowNull: false,
      defauleValue: 10,
      validate: {
        isNumeric: true,
      }
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

module.export = Producer;

