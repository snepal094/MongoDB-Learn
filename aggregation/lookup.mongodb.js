use("kec-crud");

//? $lookup

//* to query between collections
// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.person.find();

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb314408f79a4c4c8e37f"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb314408f79a4c4c8e380"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2024,
//     ownerId: ObjectId("668bb314408f79a4c4c8e381"),
//   },
// ]);

// db.vehicle.aggregate(
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       // $lookup returns array since multiple data can occur
//       from: "person", //see from compass
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//       // $first: array bhitra ko first item
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   }
// );

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       carDetails: {
//         model: { $arrayElemAt: ["$vehicleDetails.model", 0] }, //data[0],vehicleDetails[0].model
//         brand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//       },

//       //   carModel: { $arrayElemAt: ["$vehicleDetails.model", 0] }, //vehicleDetails bhitra ko first item: model
//       //   carBrand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//       //mathi ko code ko shortcut: $first=> index 0
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb314408f79a4c4c8e381"),
// });

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       localField: "_id",
//       from: "vehicle",
//       foreignField: "ownerId", //no $ because we aren't dealing with field value, just field name
//       as: "vehicleData",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       //   models: "$vehicleData.model",
//       "vehicleData.model": 1,
//       "vehicleData.brand": 1,
//       //   lastCarBrand: { $last: "$vehicleData.brand" },
//     },
//   },
// ]);

//? find the owner of Ford Mustang car
db.vehicle.aggregate(
  {
    $match: {
      model: "Mustang",
      brand: "Ford",
    },
  },
  {
    $lookup: {
      from: "person",
      localField: "ownerId",
      foreignField: "_id",
      as: "ownerDetails",
    },
  },
  {
    $project: {
      model: 1,
      brand: 1,
      ownerFirstName: { $first: "$ownerDetails.firstName" },
      ownerLastName: { $first: "$ownerDetails.lastName" },
    },
  },
  {
    $project: {
      model: 1,
      brand: 1,
      ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
    },
  }
);
