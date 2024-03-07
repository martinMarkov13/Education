const router = require('express').Router()

const homeController = require('./controller/homeController')
const userController = require('./controller/userController')
const photoController = require('./controller/photoController')

router.use(homeController)
router.use('/users', userController)
router.use('/photos', photoController)

module.exports = router;