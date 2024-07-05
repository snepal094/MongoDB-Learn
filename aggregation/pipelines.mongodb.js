// aggregation: powerful query tool
// alternative, since queries can be complex in the real world
// uses pipeline stage
// pipeline: separation of function
// one's output is another's input

//? $match, $project, $sort, $limit, $skip

use("kec-crud");

// //? $match
//read operation

// db.movies.aggregate({
//   $match: { //find ko alternative
//     name: "Glee",
//   },
// });

//? $project
// db.movies.aggregate(
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: { //output of above {} ($match), input of this {}($project)
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   }
// );

//* find movies whose genre is "Crime" or network country is "United States"
// db.movies.aggregate(
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//       _id: 0,
//     },
//   }
// );

//* find movies whose genres include both "Drama" and "Comedy" and project name and genre field
// db.movies.aggregate(
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       _id: 0,
//     },
//   }
// );

//? $sort: arranges in ascending (1) or descending order(-1)
// db.movies.aggregate(
//   { $match: {} }, //no condition: selects all movies
//   {
//     $sort: {
//       id: -1, //id in descending order
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       _id: 0,
//       name: 1,
//     },
//   }
// );

//* what if 2 movies have the same id?
// db.movies.insertOne({
//   id: 249,
//   name: "Prison Break",
// });

// db.movies.aggregate(
//   { $match: {} },
//   {
//     $sort: {
//       id: -1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       _id: 0,
//       name: 1,
//     },
//   }
// );

//can't say the order of the two movies (with id: 249) for sure

//compound sort
//in this program, if id matches then sort by name
// db.movies.aggregate(
//   { $match: {} },
//   {
//     $sort: {
//       id: -1,
//       name: 1, //if id matches then sort by name (alphabetical order)
//     },
//   },
//   {
//     $project: {
//       //code lekhda project bhanda match aghi lekhe pani mongodb le match lai nai mathi lagcha
//       id: 1,
//       _id: 0,
//       name: 1,
//     },
//   }
// );

// db.movies.aggregate(
//   { $match: {} },
//   {
//     $sort: {
//       name: -1, //gives preference to lowercase letters, then uppercase letters, then numbers
//       //for fair sorting: all names should be starting with an uppercase letter (uniformity)
//       //name: 1, //gives preference to number, then uppercase letter, then number
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   }
// );

//? $limit: number of documents to be returned
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 10, //maximum 10 ota dincha
//   }, //limit mathi rakhe suru ko 5 ota select huncha, ani tesma sort huncha
// tesaile sort garesi (sab ma) matra limit garne
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

//* find first 5 movies whose rating is greater than 8 and id is sorted in ascending order
db.movies.aggregate(
  {
    $match: {
      "rating.average": { $gt: 8 },
    },
  },
  {
    $sort: {
      id: 1,
    },
  },
  {
    $limit: 5,
  },
  {
    $project: {
      _id: 0,
      id: 1,
      avgRating: "$rating.average",
      name: 1,
    },
  }
);
