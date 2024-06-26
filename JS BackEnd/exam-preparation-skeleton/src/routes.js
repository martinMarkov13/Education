const router = require('express').Router()

const homeController = require('./controller/homeController')
const userController = require('./controller/userController')

router.use(homeController)
router.use('/users', userController)
router.use((req, res) => {
    res.status(404).redirect('/404');
});

module.exports = router;