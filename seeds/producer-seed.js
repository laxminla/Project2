const { Producer } = require('../models');

const producerData = [
  {
    producer_name: 'Cow Farm',
    producer_goods: 'milk',
    consumer_id: 1,
    producer_balance: '500,000.00',
  },
  {
    producer_name: 'Chicken Farm',
    producer_goods: 'eggs',
    consumer_id: 1,
    producer_balance: '550,000.00',
  },
  {
    producer_name: 'Vegitables farm',
    producer_goods: 'cabbage',
    consumer_id: 2,
    producer_balance: '400,000.00',
  },
  {
    producer_name: 'Fruits Farm',
    producer_goods: 'grapes',
    consumer_id: 3,
    producer_balance: '490,000.00',
  },

  {
    producer_name: 'Bees Farm',
    producer_goods: 'honey',
    consumer_id: 3,
    producer_balance: '110,000.00',
  },
];

const seedProducer = () => Producer.bulkCreate(producerData);

module.exports = seedProducer;