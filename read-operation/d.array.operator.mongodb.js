use("kec-crud");

//? array operators
//* $all
//* $elemMatch
//* $size

//* $all
//? find movies whose genre includes both "Drama" and "Comedy" (includes)
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] },{ name: 1, _id: 0 });

//if $and is being applied on the same field, AND that field is an array, we can use $all

//equivalent code
db.movies.find({ genres: { $all: ["Drama", "Comedy"] } }, { name: 1, _id: 0 });

//* $size
//drawback: we cannot provide range to size, must provide concrete value
//? find movies whose genre size is 3
db.movies.find({ genres: { $size: 3 } }, { name: 1, _id: 0 });
