const router = require('express').Router()
const animalService = require('../services/animalService')


router.get("/", async (req, res) => {
    const animals = await animalService.getAll()
    const lastThree = animals.slice(-3)
    
    res.render("home", { lastThree });
});

router.get('/404', (req, res) =>{
    res.render('404')
})

module.exports = router;