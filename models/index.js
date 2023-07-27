const User = require('./User');
const Rating = require('./Rating');

User.hasMany(Rating, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Rating.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Rating };
