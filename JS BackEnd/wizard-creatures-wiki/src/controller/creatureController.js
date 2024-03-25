const router = require("express").Router();
const creatureService = require('../services/creatureService')
const { getErrorMessage } = require("../utils/errorHelpers");


router.get("/all-posts", async (req, res) => {
    const creatures = await creatureService.getAll()

    res.render("creatures/all-posts", {creatures});
});

router.get('/create', (req, res) => {
    res.render('creatures/create')
})

router.post('/create', async (req, res) => {
    const creatureData = req.body;
    const owner = req.user._id;

    try{
        await creatureService.create({...creatureData, owner})

        res.redirect('/creatures/all-posts')
    }catch(err){
        res.render('creatures/create', {error: getErrorMessage(err)} )
    }
})

router.get('/:creatureId/delete', async (req, res) => {
    const creatureId = req.params.creatureId;

    try{
        await creatureService.delete(creatureId)
    }catch(err){
        res.render('creature/all-posts', {error:getErrorMessage(err)})
    }
})

router.get('/:creatureId/details', async (req, res) => {
    const creatureId = req.params.creatureId;
    const creature = await creatureService.getCreature(creatureId)
    const isCreator = req.user?._id == creature.owner._id
    const user = req.user?._id;

    const hasVoted = await creatureService.hasAlreadyVoted(creatureId, user)

    
    
    res.render('creatures/details', { creature, isCreator, hasVoted })
})

router.get('/:creatureId/vote', async (req, res) => {
    const creatureId = req.params.creatureId;

    const user = req.user?._id;

    await creatureService.vote(creatureId, user);

    res.redirect(`/creatures/${creatureId}/details`)
})

module.exports = router;
