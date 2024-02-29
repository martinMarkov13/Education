const router = require("express").Router();
const  userService  = require("../services/userService");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  try{
      await userService.register(userData);
      res.redirect('/users/login')

  }catch(err){
    console.log(err.message);
  }
});

module.exports = router;
