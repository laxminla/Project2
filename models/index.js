const Consumer = require('./Consumer');
const Producer = require('./Producer');
const Items = require('./Items');
const ProducerItems = require('./ProducerItems');

Consumer.hasMany(Producer, {
    foreignKey: 'consumer_id',
    onDelete: 'CASCADE'
});

Consumer.belongsTo(Producer, {
    foreignKey: 'consumer_id',
});

Producer.hasMany(Consumer, {
    foreignKey: 'consumer_id',
    onDelete: 'CASCADE'
});

Consumer.belongsToMany(Items, {
    through: {
        model: ProducerItems,
        unique: false
    },
    foreignKey: 'producer_id',

});

Items.belongsToMany(Consumer, {
    through: {
        model: ProducerItems,
        unique: false
    },
    foreignKey: 'items_id',
});



module.exports = { Consumer, Items, Producer, ProducerItems };



