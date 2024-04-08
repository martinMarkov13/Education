const router = require('express').Router()
const { getErrorMessage } = require("../utils/errorHelpers");
const stoneService = require('../services/stoneService')


router.get('/dashboard', async (req, res) => {
    const stones = await stoneService.getAll()

    res.render('stones/dashboard', {stones})
})

router.get('/create', (req, res) => {
    res.render('stones/create')
})

router.post('/create', async (req, res)=> {
    const stoneData = req.body;
    
    try{
        await stoneService.create(stoneData)

        res.redirect('/stones/dashboard')
    }catch(err){
        res.render('stones/create', {error: getErrorMessage(err)})
    }

})

router.get('/:stoneId/details', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stone = await stoneService.findOne(stoneId)

    res.render('stones/details', { stone })
})

router.get('/search', (req, res) => {
    res.render('stones/search')
})


module.exports = router;