const sequelize = require('../config/connection');
const seedConsumers = require('./consumerData');
const seedProducers = require('./producerData');
const seedItems = require('./itemsData');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedConsumers();
    console.log('\n----- CONSUMERS SEEDED -----\n');

    await seedProducers();
    console.log('\n----- PRODUCERS SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');



    process.exit(0);
};

seedAll();