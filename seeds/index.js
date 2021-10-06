const sequelize = require('../config/connection');
const seedConsumer = require('./consumerData');
const seedProducer = require('./producerData');
const seedItems = require('./ItemsData');
const seedProducerItems = require('./ProducerItems');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedConsumer();

    await seedProducer();

    await seedItems();

    await seedProducerItems();

    process.exit(0);
};

seedAll();