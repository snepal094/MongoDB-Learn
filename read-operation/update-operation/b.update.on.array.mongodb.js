use("kec-crud");

//? $push
//* add 92 on marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

//* add 87 and 93 to marks of Suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       marks: { $each: [87, 93] },
//     },
//   }
// );

//? $pop
//* 1 ==> removes item from end of array
//* -1 ==> removes item from beginning of array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: 1,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: -1,
//     },
//   }
// );

//? $pull: removes item based upon condition
//* remove marks of Smarika less than 70
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

//* remove subject: Science (inside points) of Smarika
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       //   "points.sub": "Science" //won't work, condition: whatever is inside curly brackets
//         //kun array bhanne nai clearity bhayena
//       points: { sub: "Science" },
//     },
//   }
// );

//* change subject "Science" to "Maths" (data: Suyasha)

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.sub": "Maths", //$: matching object (condition)
//     },
//   }
// );

//* pull item which has sub "Science" and marks less than 88 from Rajan's data

db.scores.find();
