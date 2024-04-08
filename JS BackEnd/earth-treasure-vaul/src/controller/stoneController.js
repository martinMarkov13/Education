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
    const owner = req.user._id;
    
    try{
        await stoneService.create({...stoneData, owner})

        res.redirect('/stones/dashboard')
    }catch(err){
        res.render('stones/create', {error: getErrorMessage(err)})
    }

})

router.get('/:stoneId/details', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stone = await stoneService.findOne(stoneId)

    const hasLiked = stone.likedList.toString().includes(req.user?._id)
    
    const isCreator = stone.owner._id == req.user?._id;

    res.render('stones/details', { stone, isCreator, hasLiked })
})

router.get('/:stoneId/delete', async (req, res) =>{
    const stoneId = req.params.stoneId;
    const stone = await stoneService.findOne(stoneId)
    const isCreator = stone.owner._id == req.user?._id;

    if(!isCreator){
        res.redirect('/stones/dashboard')
    }else{
         try{
            await stoneService.deleteStone(stoneId)

            res.redirect('/stones/dashboard')
        }catch(err){
            res.render('stones/dashboard', {error: getErrorMessage(err)})
        }
    }
})

router.get('/:stoneId/edit', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stone = await stoneService.findOne(stoneId)

    const isCreator = stone.owner._id == req.user?._id;

    if(!isCreator){
        res.redirect('/stones/dashboard')
    }else{
        res.render('stones/edit', { stone })
    }
})

router.post('/:stoneId/edit', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stoneData = req.body;
    
    const stone = await stoneService.findOne(stoneId)

    try{
        await stoneService.editStone(stone, stoneData)
        res.redirect(`/stones/${stoneId}/details`)
    }catch(err){
        res.render(`stones/edit`, { stone, error: getErrorMessage(err) })
    }
})

router.get('/:stoneId/like', async (req, res) => {
    const stoneId = req.params.stoneId;
    const user = req.user?._id;
    const stone = await stoneService.findOne(stoneId)

    try{
         await stoneService.likePost(stoneId, user)

         res.redirect(`/stones/${stoneId}/details`)
    }catch(err){
        res.render(`stones/details`, {stone, error: getErrorMessage(err)})
    }
})

router.get('/search', async (req, res) => {
    const stones = await stoneService.getAll()
    
    res.render('stones/search', { stones })
})

router.post('/search', async (req, res) => {
    const {search} = req.body;

    const stones = await stoneService.searchStone(search)
    
    res.render('stones/search', { stones })
    
})


module.exports = router;