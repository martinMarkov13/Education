const router = require('express').Router()
const gameService = require('../services/gameService')

router.get("/catalog", async (req, res) => {
    
    const games = await gameService.getAll().lean()

    res.render('games/catalog', { games })
})

router.get('/create', (req, res)=> {
    res.render('games/create')
})

router.post('/create', async (req, res) => {
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
    const isOwner = req.user?._id == game.owner._id
    
    res.render('games/details', {game, isOwner})
})

router.get('/search', (req, res) => {
    res.render('games/search')
})

router.get('/:gameId/delete', async (req, res) => {
    const gameId = req.params.gameId;

    await gameService.deleteGame(gameId)
    res.redirect('/games/catalog')
})

router.get('/:gameId/edit', async (req, res) => {
    const gameId = req.params.gameId;

    const game =  await gameService.getOneGame(gameId).lean()
    
    res.render(`games/edit`, {game})
})

router.post('/:gameId/edit', async (req, res) => {
    const gameData = req.body;
    const gameId = req.params.gameId;

    try{
        await gameService.updateGame(gameId, gameData)
        res.redirect(`/games/${gameId}/details`)
    }catch(err){
        res.render('games/edit', { error: err})
    }
})

module.exports = router;
