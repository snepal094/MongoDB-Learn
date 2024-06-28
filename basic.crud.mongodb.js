// .mongodb.js => extension
use("kec-crud");

//! INSERT OPERATION
//to insert data
//? insertOne
//? insertMany

// db.student.insertOne({
//   //student=table
//   name: "Unik",
//   address: "Imadol",
// });

// db.student.find();

//$oid= object id

// db.student.insertOne({
//   _id: 101, //can give id yourself (not recommended)
//   name: "Smarika",
//   address: "Imadol",
// });

// db.student.find();

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Prashant",
//     address: "Balaju",
//   },
// ]);

// db.student.find();

//! READ OPERATION
//? findOne (one record that matches given condition) (whichever occurs first)
//? find (all)

// db.student.find({ address: "Imadol" }); //{condition}

// db.student.findOne({ name: "Samundra" });

// db.student.findOne({ address: "Imadol" });

// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e97fbf8e454f078a0d37c") });

//! DELETE
//remove data
//? deleteOne
//? deleteMany

// db.student.find();
// db.student.deleteOne({ address: "Imadol" }); //runs findOne first
// db.student.deleteMany({ address: "Imadol" });

//! UPDATE
//to change field data(s)
//? updateOne
//? updateMany

// db.student.find();

// db.student.updateOne(
//   {
//     name: "Samundra", //runs findOne
//   },
//   {
//     $set: {
//       name: "Siddhant", //updates to this
//     },
//   }
// );

// db.student.updateMany(
//   { address: "Dhapakhel" },
//   { $set: { address: "Nakhipot" } }
// );

// db.student.find();

// db.student.updateOne(
//   { name: "Saugat" },
//   { $set: { address: "Imadol" } },
//   { upsert: true }
// );

//upsert: If present: update. Else, insert.

db.student.find();
