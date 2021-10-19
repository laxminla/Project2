const sequelize = require('../config/connection');
const { Consumer, Producer, Items, User } = require('../models');

const seedConsumer = require('./consumerData');
const seedProducer = require('./producerData');
const seedItems = require('./itemsData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedConsumer();

    await seedProducer();

    await seedItems();

    await seedUser();

    process.exit(0);
};

seedAll();