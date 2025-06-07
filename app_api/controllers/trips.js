const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  try {
    const trips = await model.find({});
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: "No trips found" });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
  try {
    const trip = await model.findOne({ code: req.params.tripCode });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  tripsList,
  tripsFindCode
};
