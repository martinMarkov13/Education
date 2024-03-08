const router = require("express").Router();
const  userService  = require("../services/userService");
const { getErrorMessage } = require("../utils/errorHelpers");
const { isLogged, isAuth } = require('../middlewares/authMiddleware')
const photoService = require('../services/photoService')

router.get("/login", isLogged ,(req, res) => { 
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

router.get("/register", isLogged ,(req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  try{
      const token = await userService.register(userData);

      res.cookie('token', token)

      res.redirect('/')
  }catch(err){
    res.render('users/register', {error: getErrorMessage(err), userData})
  }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('token')
    
    res.redirect('/')
})

router.get('/profile', async (req, res) => {
    const photos = await photoService.getMine(req.user._id).lean()

    res.render('users/profile', { photos, photoCount: photos.length})
})

module.exports = router;
