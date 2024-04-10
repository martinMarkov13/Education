const router = require('express').Router()
const volcanoService = require('../services/volcanoService')
const { isAuth } = require('../middlewares/authMiddleware')
const { getErrorMessage } = require('../utils/errorHelpers')


router.get('/catalog', async (req, res) => {
    const volcanoes = await volcanoService.getAll()
    
    res.render('volcanoes/catalog', { volcanoes })
})

router.get('/create', isAuth, (req, res) => {
    res.render('volcanoes/create')
})

router.post("/create", isAuth, async (req, res) => {
    const volcanoData = req.body;
    const owner = req.user._id;
    
    try {
      await volcanoService.createVolcano({ ...volcanoData, owner });
  
      res.redirect("/volcanoes/catalog");
    } catch (err) {
      res.render("volcanoes/create", { error: getErrorMessage(err), volcanoData });
    }
  });

router.get('/:volcanoId/details', async (req, res) => {
    const volcanoId = req.params.volcanoId
    const volcano = await volcanoService.getOne(volcanoId).lean()
    
    const isCreator = req.user?._id == volcano.owner._id;
    const hasAlreadyVoted = volcano.voteList.toString().includes(req.user?._id);


    res.render('volcanoes/details', { volcano, isCreator, hasAlreadyVoted })
})

router.get('/:volcanoId/delete', async (req, res) => {
    const volcanoId = req.params.volcanoId
    const volcano = await volcanoService.getOne(volcanoId).lean()
    const isOwner = req.user?._id == volcano.owner._id;

    if(isOwner){
        await volcanoService.deleteVolcano(volcanoId)

        res.redirect('/volcanoes/catalog')
    }else{
        res.redirect(`/volcanoes/${volcanoId}/details`)
    }
})

router.get('/:volcanoId/edit', async (req, res) => {
    const volcanoId = req.params.volcanoId
    const volcano = await volcanoService.getOne(volcanoId).lean()
    const isOwner = req.user?._id == volcano.owner._id;

    if(isOwner){
        res.render(`volcanoes/edit`, { volcano })
    }else{
        res.render(`volcanoes/${volcanoId}/details`)
    }
})

router.post('/:volcanoId/edit', async (req, res) => {
    const updateData = req.body;
    const volcanoId = req.params.volcanoId
    const isOwner = req.user?._id == volcano.owner._id;

    const volcano = await volcanoService.getOne(volcanoId).lean()

    try{
        if(isOwner){
            await volcanoService.updateVolcano(volcano, updateData)
    
            res.redirect(`/volcanoes/${volcanoId}/details`)
        }else{
            res.render(`volcanoes/${volcanoId}/details`)
        }
    }catch(err){
        res.render(`volcanoes/edit`, { volcano, error: getErrorMessage(err)});
    }
})

router.get('/:volcanoId/vote', async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const user = req.user?._id;

    try{
        await volcanoService.vote(volcanoId, user)

        res.redirect(`/volcanoes/${volcanoId}/details`)
   }catch(err){
       res.redirect(`volcanoes/${volcanoId}/details`)
   } 
})

router.get('/search', (req, res) => {
    res.render('volcanoes/search')
})


module.exports = router;