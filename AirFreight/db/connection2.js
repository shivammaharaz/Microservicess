const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { MongoClient } = require("mongodb");

let db = null;
let ping;
let connection;

const dbcon = {
  getDbConnection: () => {
    // console.log(connection.ping());
    // if (connection && connection.connection.readyState === 1) {
    //   console.log("connection avialble");
    //   return connection;
    //   // const user = mongoose.Collection.conn.collection("users");
    //   // const data = await user.find().toArray();
    //   console.log(data);
    // }

    // connection = await mongoose.connect("mongodb://localhost:27017/update", {
    //   useNewUrlParser: true,
    // });
    // const user = connection.connection.db.collection("users");
    // const data = await user.find().toArray();
    // console.log(data);
    return mongoose.connect("mongodb://localhost:27017/update", {
      useNewUrlParser: true,
    });
  },
  getDbConnection2: () => {
    // if (connection && connection.connection.readyState === 1) {
    //   return connection;
    // }

    // connection = await mongoose.connect("mongodb://localhost:27017/delete", {
    //   useNewUrlParser: true,
    // });

    return mongoose.connect("mongodb://localhost:27017/delete", {
      useNewUrlParser: true,
    });
  },
  con2: async function getConnection() {
    console.log("con2 called");
    if (db !== null) {
      console.log("stillAlive");
      return db;
    } else {
      console.log("new one");

      const dbUri = "mongodb://localhost:27017/update"; // Replace with your actual database URI
      const client = new MongoClient(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      let connection2 = await client.connect();
      db = connection2.db("update");
      // ping = await connection.db("update").admin().ping();
      return db;
    }
  },
};

module.exports = dbcon;
