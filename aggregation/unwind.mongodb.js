use("kec-crud");

//? $unwind => undo or be undone after winding or being wound

// db.products.insertOne({
//   name: "Bottle",
//   price: 400,
//   availableColor: ["blue", "green", "white"],
// });

// db.products.aggregate([
//   { $match: {} },
//   {
//     $unwind: "$availableColor", //baki sab same, just unwind gareko field ko documents tukryaucha
//   },
// ]);

// db.learners.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       sub: "Computer Network",
//       marks: 68,
//     },
//     {
//       sub: "Project Management",
//       marks: 72,
//     },
//     {
//       sub: "Organization and Management",
//       marks: 58,
//     },
//   ],
// });

db.learners.aggregate([
  {
    $match: {},
  },
  {
    $unwind: {
      path: "$scores", //can also do directly like above
    },
  },
  {
    $sort: {
      "scores.marks": 1,
    },
  },
]);
