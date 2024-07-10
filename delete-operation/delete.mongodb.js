use("kec-crud");

//TODO least 3 points on what u know about object ID

//euta item hatdai ma delete hunna, update huncha
//whole document delete huda actual delete operation bhako huncha

//? delete movie whose name is "Glee"
// db.movies.deleteOne({ name: "Glee" });

db.movies.find({ name: "Glee" });

//if:
// db.movies.deleteMany({});
//run garne ho bhane sab delete huncha

//now, if you run:
//db.movies.find();
//you get an empty array

//db.movies.findOne();
//and you get null

//WHY? think

//to read documentation: look up mongodb operators
//https://www.mongodb.com/docs/manual/reference/operator/
