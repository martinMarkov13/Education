const jwt = require("../lib/jwt");
const { SECRET } = require('../config/config')

exports.auth = async (req, res, next) => {
  const token = req.cookies["authToken"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);

      req.user = decodedToken;

      next();
    } catch (err) {
      res.clearCookie("authToken");
      
      res.redirect('users/login')
    }
  } else {
    next();
  }
};
