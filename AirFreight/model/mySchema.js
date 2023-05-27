const mongoose = require("mongoose");
const con = require("../db/connection2");
const db2 = con.getDbConnection();

const mySchema = new mongoose.Schema({
  consineeName: {
    type: String,
  },
  shipperName: {
    type: String,
  },
});

const AirMaster = db2.model("AirMaster", mySchema);
module.exports = AirMaster;
