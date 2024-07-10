use("kec-crud");

//TODO least 3 points on what u know about object ID
//ObjectID
/*
A 4-byte timestamp, representing the ObjectID's creation, measured in seconds since the Unix epoch.
A 5-byte random value generated once per process. This random value is unique to the machine and process.
A 3-byte incrementing counter, initialized to a random value.

Why use ObjectID?
Unique Identification: Guarantees uniqueness across documents.
Timestamp Embedded: Contains a timestamp, which can be useful for sorting by creation time.
Compactness: Uses only 12 bytes, which is efficient compared to other unique ID schemes.
*/

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
