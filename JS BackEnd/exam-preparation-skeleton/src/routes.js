const router = require('express').Router()

const homeController = require('./controller/homeController')
const userController = require('./controller/userController')

router.use(homeController)
router.use('/users', userController)

module.exports = router;