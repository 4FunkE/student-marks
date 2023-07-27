// Importing the Sequelize library
const Sequelize = require('sequelize');
// Loading environment variables from a .env file
require('dotenv').config();

// Create a connection object
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Password
    {
    // Database location
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;