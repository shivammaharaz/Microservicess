const jwt = require("jsonwebtoken");

const verify= async(req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
  return res.status(401).json({ message: 'Unauthorized' });
  }
 const verifys=await jwt.verify(token, "ambuj1264", (err, user) => {
  if (err) {
  return res.status(403).json({ message: 'Invalid or expired token' });
  }
  req.user = user;
  next();
  });

};
module.exports=verify
