const Consumer = require('./Consumer');
const Items = require('./Items');
const Producer = require('./Producer');


// Consumer.hasMany(Producer, {
//     foreignKey: 'consumer_id',
//     onDelete: 'CASCADE'
// });

// Producer.belongsTo(Consumer, {
//     foreignKey: 'consumer_id',
// });

// Consumer.hasMany(Items, {
//     foreignKey: 'consumer_id',
//     onDelete: 'CASCADE'
// });

// Items.belongsTo(Consumer, {
//     foreignKey: 'consumer_id',
// });

module.exports = { Consumer, Items, Producer };
