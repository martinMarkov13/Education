const router = require('express').Router()
const userService = require('../services/userService')
const {isAuthorized} = require('../middlewares/authMiddleware')


router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    try{
        const token = await userService.login(email, password)

        res.cookie('token', token)
        
        res.redirect('/')
    }catch(err){
        res.render('users/login', {error: err})
    }
})

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        await userService.register(userData)
        res.redirect('/users/login')
    }catch(err){
        res.render('users/register', {error: err})
    }
})

router.get('/logout', isAuthorized, (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
})

module.exports = router;