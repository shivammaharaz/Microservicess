const express=require("express");
const loginMaster = require("../controller/loginController");
const router=express.Router();
const Registration=require("../controller/registerController")
const verify=require("../middleware/verify")
const ContactMaster=require("../controller/contactController")
const productMaster=require("../controller/productController");
const { login } = require("../controller/loginController");
const cloudinary = require('cloudinary').v2;




cloudinary.config({ 
         cloud_name: 'dzepo3ahj', 
         fapi_key: '361849511236691', 
          api_secret: 'mltoKlZetZWH5NiokGqLbYkkjtw' 
});


router.post('/auth/verify-token', verify, (req, res) => {
    // Token is valid, return success response
    res.json({ message: 'Token is valid' });
    });
router.post("/userRegister",Registration.register)
router.post("/login", loginMaster.login)
router.post('/reset',loginMaster.reset)
router.get('/reset/:token',loginMaster.resetandverify)
router.post("/contact", ContactMaster.contact)
router.get("/welcomeback",async(req,res)=>{
    res.json({
    "Hello":"Ambuj"})})
router.post("/welcome",verify,loginMaster.welcome)
router.get("/productAll",productMaster.productAll)
router.post("/product",verify,productMaster.product)
// router.get("/productAll",verify,productMaster.productAll)




module.exports=router;
