use("kec-crud");

//* COMPARISON OPERATOR
// $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

// db.movies.find();

//? find the movie whose name is "Glee"
// name==="Glee"
//* $eq (equal to)
// $ comes with a curly bracket
// db.movies.find({ name: { $eq: "Glee" } }); //whole data
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, _id: 0 }); //just name
//second {}: select (select just name to display)
//_id: 0 (_id is displayed by default cuz it's a primary key, 0 to not show)

//equivalent code
//one is not better/worse than the other, only convenience differs
//shortcut for the above code (the above code is what is actually run)
// db.movies.find({ name: "Glee" });

//? find movies with run time greater than 70
//* $gt (greater than)
// db.movies.find({ runtime: { $gt: 70 } });
// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1, _id: 0 });

//? find movies whose rating is greater than 9
//if you have to use a dot operator, enclose within strings
// db.movies.find({ "rating.average": { $gt: 9 } }, { name: 1, averageRating: "$rating.average", _id: 0 });
//created a field averageRating, $ in $rating.average implies value

//? find movies whose id is not 1
// $ne: not equal to
// db.movies.find({ id: { $ne: 1 } });

//equivalent code
// db.movies.find({ id: { $not: { $eq: 1 } } });
