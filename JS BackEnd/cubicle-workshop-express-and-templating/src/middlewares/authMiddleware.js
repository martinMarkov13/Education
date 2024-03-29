const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.authMiddleware = async (req, res, next) => {
  const token = req.cookies["authToken"];

  if (token) {
    try {
        const user = await jwt.verify(token, SECRET);

        req.user = user; //carry information about the user in every request 
        res.locals.user  = user;
        res.locals.isAuthenticated = true;

        next();
    } catch (err) {
        res.clearCookie("authToken");

        res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuthenticated = (req, res, next) => {
    if(!req.user) {
        return res.redirect('/users/login')
    }
    
    next()
}
