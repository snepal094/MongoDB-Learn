use("kec-crud");

//task:
// TODO all previous find operations using aggregate function

//* a.comparison.operator.mongodb.js

//? find the movie whose name is "Glee"
// db.movies.aggregate({
//   $match: {
//     name: "Glee",
//   },
// });

//? find movies with run time greater than 70
// db.movies.aggregate(
//   {
//     $match: {
//       runtime: { $gt: 70 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       runtime: 1,
//     },
//   }
// );

//? find movies whose rating is greater than 9
// db.movies.aggregate(
//   {
//     $match: {
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       averageRating: "$rating.average",
//     },
//   }
// );

//? find movies whose id is not 1
// db.movies.aggregate(
//   {
//     $match: {
//       id: { $ne: 1 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//       _id: 0,
//     },
//   }
// );

//* b.logical.operator.mongodb.js

//? find movies whose genre is "Action" and rating is greater than 7
// db.movies.aggregate(
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 7 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//       averageRating: "$rating.average",
//     },
//   }
// );

//? find movies whose genre is "Crime" or network country is "United States"
// db.movies.aggregate(
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//       country: "$network.country.name",
//     },
//   }
// );

//? find movies whose rating is neither greater than 7 nor is genres "Drama"
// db.movies.aggregate(
//   {
//     $match: {
//       $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//       averageRating: "$rating.average",
//     },
//   }
// );

//* c.evaluation.operator.mongodb.js

//? find data having "Top Model" in the name
// db.movies.aggregate(
//   {
//     $match: {
//       name: { $regex: "top model", $options: "i" },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//     },
//   }
// );

//? find data having "dark comical" in the summary
// db.movies.aggregate({
//   $match: {
//     summary: { $regex: "dark comical", $options: "i" },
//   },
// });

//? find employees whose expense is greater than their income
// db.employee.aggregate({
//   $match: {
//     $expr: { $gt: ["$expense", "$income"] },
//   },
// });

//? find employees whose income is less than 850
// db.employee.aggregate({
//   $match: {
//     income: { $lt: 850 },
//   },
// });

//* find movies whose genre includes both "Drama" and "Comedy"
// db.movies.aggregate(
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   }
// );

//? find movies whose genre size is 3
// db.movies.aggregate(
//   {
//     $match: {
//       genres: { $size: 3 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   }
// );

//? find the person who has score greater than 80 in "Social" subject
// db.scores.aggregate({
//   $match: {
//     points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
//   },
// });

//? find students whose scores is greater than 80 and less than 85
// db.scores.aggregate({
//   $match: {
//     marks: { $elemMatch: { $gt: 80, $lt: 85 } },
//   },
// });

//* assignment/read.operation.assignment.mongodb.js

//? find movies whose status is "Ended"
// db.movies.aggregate(
//   {
//     $match: {
//       status: "Ended",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       status: 1,
//     },
//   }
// );

//? find movies whose rating is 9
// db.movies.aggregate(
//   {
//     $match: {
//       "rating.average": 9,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       averageRating: "$rating.average",
//     },
//   }
// );

//? find movies whose rating is greater than 7 and less than 9
// db.movies.aggregate(
//   {
//     $match: {
//       "rating.average": { $gt: 7, $lt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       averageRating: "$rating.average",
//     },
//   }
// );

//? find movies whose genres is Thriller
// db.movies.aggregate(
//   {
//     $match: {
//       genres: "Thriller",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   }
// );

//? find movies whose status is Running
// db.movies.aggregate(
//   {
//     $match: {
//       status: "Running",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       status: 1,
//     },
//   }
// );

//? find movies whose status is Ended and runtime is 60
// db.movies.aggregate(
//   {
//     $match: {
//       $and: [{ status: "Running" }, { runtime: 60 }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       status: 1,
//       runtime: 1,
//     },
//   }
// );

//? find movies whose weight is 75 and network country is Canada
// db.movies.aggregate(
//   {
//     $match: {
//       $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       country: "$network.country.name",
//       weight: 1,
//     },
//   }
// );

//? find movies whose weight is 96 or runtime is 60
// db.movies.aggregate(
//   {
//     $match: {
//       $or: [{ weight: 96 }, { runtime: 60 }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       runtime: 1,
//       weight: 1,
//     },
//   }
// );

//? find movies whose rating average is not 9
// db.movies.aggregate(
//   {
//     $match: {
//       "rating.average": { $ne: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       averageRating: "$rating.average",
//     },
//   }
// );

//? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies.aggregate(
//   {
//     $match: {
//       "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       avgRating: "$rating.average",
//       _id: 0,
//     },
//   }
// );

//?find movies whose genre is neither "Action" nor "Thriller"
// db.movies.aggregate(
//   {
//     $match: {
//       genres: { $nin: ["Action", "Thriller"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   }
// );

//? find movies whose genres includes "Drama" , "Comedy" and "Action"
// db.movies.aggregate(
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy", "Action"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   }
// );

//? find movies whose genre size is 3
db.movies.aggregate(
  {
    $match: {
      genres: { $size: 3 },
    },
  },
  {
    $project: {
      name: 1,
      _id: 0,
      genres: 1,
    },
  }
);
