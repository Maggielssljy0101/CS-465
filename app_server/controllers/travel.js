const fs = require('fs');
const trips = JSON.parse(fs.readFileSync(__dirname + '/../data/trips.json', 'utf8'));


/* Get traveler view */ 
const travel = (req, res) => {
  const pageTitle = 'Travlr Getaways - Travel';
  res.render('travel', { title: pageTitle, trips });
};

module.exports = {
  travel
};
