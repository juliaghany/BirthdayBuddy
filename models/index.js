const User = require('./User');
const Gift = require('./Gift');
const Receiver = require('./Receiver');

// Gift belongs to one receiver
Gift.belongsTo(Receiver, { foreignKey: 'receiver_id', onDelete: 'CASCADE' });

// Receiver has many gifts
Receiver.hasMany(Gift, { foreignKey: 'receiver_id', onDelete: 'CASCADE' });

// User has many receivers
User.hasMany(Receiver, { foreignKey: "user_id", onDelete: 'CASCADE' });

// Receiver belongs to user
Receiver.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = { User, Receiver, Gift }