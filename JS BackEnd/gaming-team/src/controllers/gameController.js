const router = require('express').Router()
const gameService = require('../services/gameService')

router.get("/catalog", (req, res) => {
    
    const games = gameService.getAll().lean()

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
    const gameId = req.params;
    const game = await gameService.getOneGame(gameId)
    const isOwner = req.user?._id == game.owner._id
    
    console.log(game);
    res.render('games/details', {game, isOwner})
})


module.exports = router;
