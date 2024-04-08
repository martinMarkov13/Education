const router = require('express').Router()
const stoneService = require('../services/stoneService')

router.get("/", async (req, res) => {
    const stones =  await stoneService.getAll()
    const lastThree = stones.slice(-3)

    res.render("home", {lastThree});
});

router.get('/404', (req, res) =>{
    res.render('404')
})


module.exports = router;