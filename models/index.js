const Consumer = require('./Consumer');
const Items = require('./Items');
const Producer = require('./Producer');
const User = require('./User');

Consumer.hasMany(Producer, {
    foreignKey: 'consumer_id',
    onDelete: 'CASCADE'
});

Producer.belongsTo(Consumer, {
    foreignKey: 'consumer_id',
});

Consumer.hasMany(Items, {
    foreignKey: 'consumer_id',
    onDelete: 'CASCADE'
});

Items.belongsTo(Consumer, {
    foreignKey: 'consumer_id',
});

Consumer.hasMany(User, {

    foreignKey: 'consumer_id',
    onDelete: 'CASCADE'
});

module.exports = { Consumer, Items, Producer, User };
