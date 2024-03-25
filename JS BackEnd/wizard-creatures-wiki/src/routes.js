const router = require('express').Router()

const homeController = require('./controller/homeController')
const userController = require('./controller/userController')
const creatureController = require('./controller/creatureController')

router.use(homeController)
router.use('/users', userController)
router.use('/creatures', creatureController)
router.get('*', (req, res) => {
    res.redirect('404')
})

module.exports = router;