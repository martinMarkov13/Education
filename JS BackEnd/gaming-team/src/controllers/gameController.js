const router = require('express').Router()
const gameService = require('../services/gameService')
const {isAuthorized} = require('../middlewares/authMiddleware')


router.get("/catalog", async (req, res) => {
    
    const games = await gameService.getAll()

    res.render('games/catalog', { games })
})

router.get('/create', isAuthorized, (req, res)=> {
    res.render('games/create')
})

router.post('/create', isAuthorized, async (req, res) => {
    const gameData = req.body;
    const owner = req.user._id;

    try{
        await gameService.createGame({...gameData, owner})

        res.redirect('/games/catalog')
    }catch(err){
        res.render('games/create', {error: err})
    }
})

router.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;
    const game = await gameService.getOneGame(gameId).lean()
    console.log(game);
    const isOwner = req.user?._id == game.owner._id;
    const isBought = await gameService.isBought(gameId, req.user?._id)
    
    res.render('games/details', {game, isOwner, isBought})
})

router.get('/search', isAuthorized, async (req, res) => {
    const games = await gameService.getAll()

    res.render('games/search', {games})
})

router.post('/search', isAuthorized, async (req, res) => {
    const {search, platform} = req.body;

    const games = await gameService.getSearched(search, platform)
       
    res.render('games/search', {games})
    
})

router.get('/:gameId/delete', isAuthorized, async (req, res) => {
    const gameId = req.params.gameId;

    await gameService.deleteGame(gameId)
    res.redirect('/games/catalog')
})

router.get('/:gameId/edit', isAuthorized, async (req, res) => {
    const gameId = req.params.gameId;

    const game =  await gameService.getOneGame(gameId).lean()
    
    res.render(`games/edit`, {game})
})

router.post('/:gameId/edit', isAuthorized, async (req, res) => {
    const gameData = req.body;
    const gameId = req.params.gameId;

    try{
        await gameService.updateGame(gameId, gameData)
        res.redirect(`/games/${gameId}/details`)
    }catch(err){
        res.render('games/edit', { error: err})
    }
})

router.get('/:gameId/buy', isAuthorized, async (req, res) => {
    const gameId = req.params.gameId;
    const buyerId = req.user._id;
    try{
        await gameService.buyGame(gameId, buyerId)
        res.redirect(`/games/catalog`)
    }catch(err){
        console.log(err.message);
    }
})

module.exports = router;
