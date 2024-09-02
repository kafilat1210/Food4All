const sequelize = require('./config/database');
const User = require('./models/User');
const FoodListing = require('./models/FoodListing');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Unable to create database:', error);
});
