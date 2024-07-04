use("kec-crud");

//? $ operator
// $ => element which matches the document

//* change subject "Maths" to "Statistics" (Suyasha's document)
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   //required document select huna ma {"sub": "Maths", "point": 84}
//   //yo object ko haat cha, so it is called dollar
//   {
//     $set: {
//       "points.$.sub": "Statistics",
//     },
//   }
// );

// //* increase marks of "Science" by 3 (Suyasha)
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" }, //point 92 aruko ni huna sakcha, so "Science" nai leko
//   {
//     $inc: {
//       "points.$.point": 3,
//     },
//   }
// );

//* update sub from "C++" to "MERN" and point to 69 from Smarika's data
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23"), "points.sub": "C++" },
//   {
//     $set: {
//       "points.$.sub": "MERN", //$ signifies the object due to which condition matched in the first {}
//       //without $ error occurs, without the condition in the first {}, this $ has no meaning
//       "points.$.point": 69,
//     },
//   }
// );

//* update points to 70 for each sub of Smarika
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23") },
//   {
//     $set: {
//       "points.$[].point": 70,
//       //$[] selects all items
//     },
//   }
// );

//* update point to 82 for each sub which has point below 80 for Suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $max: {
//       "points.$[].point": 82,
//     },
//   }
// );

//min max just works for numeric field
//equivalent code:
// db.scores.updateOne(
//     { name: "Suyasha" },
//     {
//       $set: {
//         "points.$[element].point": 75, //simply put: element=item
//       },
//     },
//     {
//       arrayFilters: [{ "element.point": { $lt: 70 } }],
//     }
//   );

//* decrease each marks of Rajan by 10
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "marks.$[]": -10,
//     },
//   }
// );

//* set 73 marks to 77 to Suyasha's marks
// db.scores.updateOne(
//   { name: "Suyasha", marks: 73 },
//   {
//     $set: {
//       "marks.$": 77, //duita 73 bhako bhaye first ko matra change hunthyo
//     },
//   }
// );

//* decrease each marks which are greater than 80 by 10 marks for "Smarika"
db.scores.updateOne(
  { _id: ObjectId("66829a613475304cae079d23") },
  {
    $inc: {
      "marks.$[element]": -10,
    },
  },
  {
    arrayFilters: [{ element: { $gt: 80 } }],
  }
);

db.scores.find();
