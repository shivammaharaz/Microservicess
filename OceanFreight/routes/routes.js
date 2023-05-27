const express=require("express");
const verify = require("../Middleware/verify");


const routes=express.Router();
const manyRoutes= require("./auth/router")
routes.use("/auth",verify,manyRoutes)
// routes.use("/",manyRoutes)

module.exports=routes;
