use("kec-crud");

//* logical operator
//* $and, $or, $not, $nor

// db.movies.find();

//! AND
//* $and
//? find movies whose genre is "Action" and rating is greater than 7
//array for multiple conditions
// db.movies.find({$and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }]},{ name: 1, genres: 1, avgRating: "$rating.average", _id: 0 });

//equivalent code
// db.movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

//! OR
//* $or
//? find movies whose genre is "Crime" or network country is "United States"
// db.movies.find({$or: [{ genres: "Crime" }, { "network.country.name": "United States" }],},{ name: 1, "network.country.name": 1, _id: 0 });

//! NOT
//see: a.comparison.operator.js, last line

//! NOR
//* $nor: all applied conditions should not match
//? find movies whose rating is neither greater than 7 nor is genres "Drama"
db.movies.find(
  { $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }] },
  { _id: 0, name: 1, genres: 1, averageRating: "$rating.average" }
);

//! NAND
//TODO: real life scenarios(questions): AND, OR, NAND, NOR
