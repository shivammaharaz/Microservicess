const mongoose = require("mongoose");
const con = require("../db/connection2");
const db2 = con.getDbConnection2();
const db1 = con.getDbConnection();
const model2 = db1.connection.db.collection("users");

const mySchema = new mongoose.Schema({
  consineeName: {
    type: String,
  },
  air: {
    type: mongoose.Types.ObjectId,
    ref: model2,
  },
});

const scrum = db2.model("scrum", mySchema);
module.exports = scrum;
