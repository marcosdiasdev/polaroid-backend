const secret = process.env.SECRET;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
  const token = req.signedCookies.token;
  if(!token) {
    return res.status(401).send({ auth: false, message: "No token provided"});
  }

  jwt.verify(token, secret, function(err, decoded) {
    if(err) res.status(401).send({ auth: false, message: "Failed to authenticate token"});

    req.user_id = decoded.user_id;
    next();
  });
}