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
//       //   "points.sub": "Science" //won't work, condition: whatever is inside curly brackets: $pull: {condition}
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
// db.scores.updateOne(
//   { name: "Rajan" }, //eutai array ma bhako bhaye yei line of code (find) ma $elemMatch lagaune
//   {
//     $pull: {
//       points: { sub: "Science" },
//       marks: { $lt: 88 },
//     },
//   }
// );

//? $pullAll
//no conditions
//we give concrete value which needs to be removed

// db.scores.updateOne(
//   { _id: ObjectId("66851fe53faff27c0a24a8e2") },
//   {
//     $pullAll: {
//       marks: [42, 65], //can target multiple values
//     },
//   }
// );

//* push 78, 67, 83 to the marks array of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: { $each: [78, 67, 83] },
//     },
//   }
// );

//? $addToSet
//insert if the value dosen't exist, else leave it be

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       marks: { $each: [95, 83, 88, 52] },
//     },
//   }
// );

//* push an object with sub: Science and point: 92 on Suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: { sub: "Science", point: 92 },
//     },
//   }
// );

//* push 57, 88, 96 on Suyasha's marks such that no value is duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: {
//       marks: { $each: [57, 88, 96] },
//     },
//   }
// );

//* change Rajan's lucky color to "orange"
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       "luckyThings.color": "orange",
//     },
//   }
// );

//* pull last item from Rajan's points
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pop: {
//       points: 1,
//     },
//   }
// );

//* decrease age of Smarika by 20
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23") },
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );

//* push {sub:"C Program",point:72} and {sub:"C++",point:65} on Smarika's points
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23") },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );

//* divide age of Rajan by 2
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

db.scores.find();
