const jwt = require("jsonwebtoken");
const axois=require("axios");
const { default: axios } = require("axios");

const verify= async(req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
    // Verify token by making a request to the authentication service
  

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:64/auth/verify-token',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
     
    try {
        const response= await axios(config);
        console.log(response.data,"gjgjg")
        if(response.data){
            next();
        }
        console.log("ererewruqreouqworuqweruqoeru")
    } catch (error) {

        console.log(error.stack)
        res.status(401).send({
            message:"token is invalid"
        })
    }
   
    } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
    }
}
module.exports=verify;



