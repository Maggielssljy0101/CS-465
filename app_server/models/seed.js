const mongoose = require('mongoose');
require('./db');
const Trip = require('./travlr');
const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

seedDB().then(async () => {
  await mongoose.connection.close();
  console.log('🌱 Seeding complete and DB closed.');
  process.exit(0);
});
