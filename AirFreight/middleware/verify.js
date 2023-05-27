const jwt = require("jsonwebtoken");
// const axois = require("axios");
const { default: axios } = require("axios");

const verify = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  //   if (!token) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  try {
    // const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await jwt.verify(token, "ambuj1264", (err, user) => {
      if (err) {
        res.json({ token: "invalid" });
      } else {
        console.log("data");
        next();
      }
    });
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
module.exports = verify;
