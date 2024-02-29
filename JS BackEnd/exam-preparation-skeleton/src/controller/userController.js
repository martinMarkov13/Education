const router = require("express").Router();
const  userService  = require("../services/userService");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post('login', async (req, res) => {
    const { username, password} = req.body

    try{
        const token = await userService.login(username, password)

        res.cookie('authToken', token)

    }catch(err){
        console.log(err.message);
    }

    res.redirect('/')
})

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

router.get('/logout', (req, res) => {
    res.clearCookie('authToken')
    
    res.redirect('/')
})

module.exports = router;
