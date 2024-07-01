use("kec-crud");

//? array operators
//* $all
//* $elemMatch: array must contain at least one element that matches all conditions
//* $size

//* $all
//? find movies whose genre includes both "Drama" and "Comedy" (includes)
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] },{ name: 1, _id: 0 });

//* if $and is being applied on the same field, AND that field is an array, we can use $all

//equivalent code
// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } }, { name: 1, _id: 0 });

//* $size
//drawback: we cannot provide range to size, must provide concrete value
//? find movies whose genre size is 3
// db.movies.find({ genres: { $size: 3 } }, { name: 1, _id: 0 });

//* $elemMatch

// db.scores.insertMany([
//   {
//     name: "Subham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);

//? find the person who has score greater than 80 in "Social" subject
// db.scores.find({ "points.sub": "Social", "points.point": { $gt: 80 } });
//above code dosen't prove to be correct, since it is deemed correct if any one element in the array satisfies the condition
//so, we use $elemMatch

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });

//? find students whose scores is greater than 80 and less than 85
// db.scores.find({ scores: { $gt: 80, $lt: 85 } });
//above code dosen't work since it emphasizes on individual conditions, not both at a time
db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });
//array bhitra multiple conditions cha, tyo condition at least euta array le completely satisfy gareko huncha
//and le kaam gardaina since eutai element ma bhanera specify hunna and ma, different arrays ma bhaye ni kaam garcha euta data ma
//$elemMatch: eutai array ma condition satisfy huna paryo
