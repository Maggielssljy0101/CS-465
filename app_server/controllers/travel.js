const travel = (req, res) => {
  const pageTitle = 'Travlr Getaways - Travel';
  res.render('travel', { title: pageTitle });
};

module.exports = {
  travel
};
