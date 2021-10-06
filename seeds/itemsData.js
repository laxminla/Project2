const { Items } = require('../models');

const itemsdata = [
    {
        item_name: 'cucumber/each',
        item_description: 'organic english cucumber',
        consumer_id: 1,
        item_price: 1.00,
    },
    {
        item_name: 'mango/each',
        item_description: 'Hawaian riped mango',
        consumer_id: 1,
        item_price: 1.50,
    },
    {
        item_name: 'milk/gallon',
        item_description: 'organic whole milk',
        consumer_id: 2,
        item_price: 5.00,
    },
    {
        item_name: 'yogurt',
        item_description: 'organic whole milk yogurt',
        consumer_id: 3,
        item_price: 4.00,
    },

    {
        item_name: 'eggs/dozen',
        item_description: 'organic farm raised chicken eggs',
        consumer_id: 1,
        item_price: 8.00,
    },
];

const seedItems = () => Items.bulkCreate(itemsdata);

module.exports = seedItems;