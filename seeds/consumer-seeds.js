const { Consumer } = require('../models');

const consumerdata = [
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

const seedConsumer = () => Consumer.create(consumerdata);

module.exports = seedConsumer;