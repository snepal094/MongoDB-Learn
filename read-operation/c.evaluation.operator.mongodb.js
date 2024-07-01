use("kec-crud");

//? evaluation operator
//? $regex, $expr

//* $regex
//? find data having "Top Model" in the name
// db.movies.find({ name: { $regex: "top model", $options: "i" } });
//$options: "i" makes it case insensitive

//? find data having "dark comical" in the summary
// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });

// db.employee.insertMany([
//   { name: "Utsarga", income: 800, expense: 600 },
//   { name: "Smriti", income: 900, expense: 1100 },
//   { name: "Samrat", income: 1100, expense: 700 },
// ]);

// db.employee.find();

//? find employees whose expense is greater than their income
//no concrete value to compare with
//comparison in the same field of same record: use $expr
db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });
// $expr: { $gt: ["$expense", "$income"] ==> expense>income
//$==>field in the data

//? find employees whose income is less than 850
// db.employee.find({ income: { $lt: 850 } });

//equivalent code
// db.employee.find({ $expr: { $lt: ["$income", 850] } });
