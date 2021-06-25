const { Sequelize } = require('sequelize');

// Database Configuration Settings
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Authenticates and Initiates Connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error))

module.exports = sequelize;