const Movie = require("./assignment3/models/movie");

// return all records
Movie.find({}, (err, items) => {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});