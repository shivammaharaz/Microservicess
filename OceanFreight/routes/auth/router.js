const express=require("express");

const router=express.Router();
const airController=require("../../controller/myController");

router.get("/ocean",airController.getAir)
router.get("/",airController.get);

router.post("/addair",airController.addAir);


module.exports=router;
