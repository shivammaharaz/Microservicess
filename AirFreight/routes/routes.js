const express = require("express");
const verify = require("../middleware/verify");
const mongoose = require("mongoose");
const dbcon = require("../db/connection2");

const routes = express.Router();
const manyRoutes = require("./auth/router");
routes.use("/auth", verify, manyRoutes);
// routes.use("/",manyRoutes)
// routes.use("/", async (req, res) => {
//   console.log("hi");
//   let connections = await dbcon.getDbConnection();
//   const AirMaster = mongoose.model("AirMaster");
//   const data = await AirMaster.find({});
//   res.json({ data: data });
// });

module.exports = routes;
