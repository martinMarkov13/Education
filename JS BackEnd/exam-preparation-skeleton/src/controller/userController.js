const router = require("express").Router();
const  userService  = require("../services/userService");
const { getErrorMessage } = require("../utils/errorHelpers");
router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post('/login', async (req, res) => {
    const { username, password} = req.body

    try{
        const token = await userService.login(username, password)

        res.cookie('token', token)

        res.redirect('/')
    }catch(err){
        res.render('users/login', {error: getErrorMessage(err)})
    }
})

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  try{
      const token = await userService.register(userData);

      res.cookie('token', token)

      res.redirect('/')
  }catch(err){
    console.log(userData);
    res.render('users/register', {error: getErrorMessage(err), userData})
  }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    
    res.redirect('/')
})

module.exports = router;
