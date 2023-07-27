const sequelize = require('../config/connection');
const { User, Rating } = require('../models');

const userData = require('./userData.json');
const ratingData = require('./ratingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const rating of ratingData) {
    await Rating.create({
      ...rating,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
