const { Consumer } = require('../models');

const consumerData = [
    {
        consumer_name: 'Safeway',
        consumer_goods: 'food',
    },
    {
        consumer_name: 'Raleys',
        consumer_goods: 'food',
    },
    {
        consumer_name: 'Savemart',
        consumer_goods: 'food',
    },
    {
        consumer_name: 'Winco',
        consumer_goods: 'food',
    },

    {
        consumer_name: 'Walmart',
        consumer_goods: 'food',
    },
];

const seedConsumer = () => Consumer.bulkCreate(consumerData);

module.exports = seedConsumer;