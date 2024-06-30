use("kec-crud");

//? evaluation operator
//? $regex, $expr

//* $regex
//? find data having "Top Model" in the name
// db.movies.find({ name: { $regex: "top model", $options: "i" } });
//$options: "i" makes it case insensitive

//? find data having "dark comical" in the summary
// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });
