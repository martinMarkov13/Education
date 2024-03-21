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

module.exports = router;
