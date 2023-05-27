const express = require("express");
const app = express();
const port = 5002;
const dbcon = require("./db/connection2");
const mongoose = require("mongoose");
// require("./db/connection")
const schema1 = require("./model/newdb");
var cors = require("cors");
app.use(cors());
const router = require("./routes/routes");

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const { useResolvedPath } = require("react-router-dom");
const swaggerJsDocs = YAML.load("./api.yaml");
app.use(
  "/app-prefix/air-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDocs)
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  console.log("hi");
  let db = await dbcon.con2();
  //   let resp = connection.ping();
  //   console.log(resp);
  // let db = connection.db("update");

  let collection = db.collection("users");
  //   const ProductSchema = new mongoose.Schema({}, { strict: false });
  //   const users = mongoose.connection.collection.call;
  //   //   const Product = connection.model(
  //   //     "",
  //   //     new mongoose.Schema({}, { strict: false }),
  //   //     "users"
  //   //   );

  await collection.findOne({ name: "Rahul Karn" }).then((data) => {
    res.json({ data: data });
  });
});
app.get("/s", async (req, res) => {
  console.log("hi");
  let db = await dbcon.getDbConnection2();
  let db2 = await dbcon.getDbConnection();
  const data = schema1.create({
    consineeName: "shivam",
    air: "632d7d9b8cefa60debf3b12e",
  });

  // let collection = db.collection("users");

  // let data = await collection
  //   .aggregate([{ $match: { email: "aditya@gmail.com" } }])
  //   .toArray();
  res.json({ data: data });
});

app.use(router);

app.listen(`${port}`, () => {
  console.log("you are listening on ", port);
});
