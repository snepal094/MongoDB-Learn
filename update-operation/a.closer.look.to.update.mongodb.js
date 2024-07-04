use("kec-crud");

//update operators are always kept at the beginning

//? $set
// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $set: {
//       name: "Rajan",
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

//every record has age= 21
//it adds value (field) if it dosen't already exist
//upsert adds the whole document(record) and not just one field

//? $unset: removes that field
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $unset: {
//       age: "",
//       //hataune bhako bhayera khaali chodda ni huncha, but j value rakhe ni this field gets deleted
//     },
//   }
// );

//* update age of Rajan to 30
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );

//* update age of Suyasha to 40
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );

//? $inc: increases field value by provided value
//* increase everyone's age by 5
// db.scores.updateMany(
//   {}, //empty=> every record
//   {
//     $inc: {
//       age: 5, //decrease by 5: -5
//     },
//   }
// );

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });

// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: {
//       age: -5,
//     },
//   }
// );

//? $mul=> multiply
//* multiply the age of the record with the given _id by 2
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? divide the age of Suyasha by 2
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

//? $rename
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//       //LHS: to be changed
//       //RHS: changed to that
//     },
//   }
// );

//? $min, $max
//* $min: if field value is more than specified value, it sets min value to that field
//* $max: if field value is less than specified value, it sets max value to that field

// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16, //16 bhanda badhi ko value lai 16 banaucha
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50, //50 bhanda kamm ko value lai 50 banaucha
//     },
//   }
// );

// db.scores.find();

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

//*update lucky color of Suyasha to "Blue"
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d22") },
//   {
//     $set: {
//       "luckyThings.color": "Blue",
//     },
//   }
// );

//*update lucky number of Smarika to 8
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d23") },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

//*increase lucky number of Rajan by 3
// db.scores.updateOne(
//   { _id: ObjectId("66829a613475304cae079d21") },
//   {
//     $inc: {
//       "luckyThings.number": 3, //luckyThings: {number: 10} will update luckyThings as a whole with just number: 10 as data
//     },
//   }
// );

db.scores.find();
