const router = require('express').Router()
const animalService = require('../services/animalService')
const { getErrorMessage } = require("../utils/errorHelpers");


router.get('/catalog', async (req, res) => {
    const animals = await animalService.getAll()

    res.render('animals/catalog', { animals })
})

router.get('/create', (req, res) => {
    res.render('animals/create')
})

router.post('/create', async (req, res) => {
    const animalData = req.body;
    const owner = req.user._id;
    try{
        await animalService.create({...animalData, owner})
   
        res.redirect('/animals/catalog')
    }catch(err){
        res.render('animals/create', {error: getErrorMessage(err)})
    }
})

router.get('/:animalId/details', async (req, res) => {
    const animalId = req.params.animalId
    const animal = await animalService.getOne(animalId)
    const isOwner = req.user?._id == animal.owner._id
    const donatorId = req.user?._id

    const hasDonated =  animal.donations.toString().includes(donatorId)
    
    res.render('animals/details', { animal, isOwner, hasDonated })
})

router.get('/:animalId/donate', async (req, res) => {
    const animalId = req.params.animalId;
    const donatorId = req.user._id
    try{
        await animalService.donate(animalId, donatorId)

        res.redirect(`/animals/${animalId}/details`)
    }catch(err){
        res.redirect('/')
    }
})

router.get('/:animalId/delete', async (req, res) => {
    const animalId = req.params.animalId;

    await animalService.deleteAnimal(animalId)

    res.redirect('/animals/catalog')
})

router.get('/:animalId/edit', async (req, res) => {
    const animalId = req.params.animalId
    const animal = await animalService.getOne(animalId)

    res.render('animals/edit', {animal})
})

router.post('/:animalId/edit', async (req, res) => {
    const animalId = req.params.animalId;
    const animalData = req.body;
  
    try{
        await animalService.editAnimal(animalId, animalData)
        
        res.redirect(`/animals/${animalId}/details`)
    }catch(err){
        res.redirect(`/animals/${animalId}/details`, {error: getErrorMessage(err)})
    }
})

router.get('/search', async (req, res) => {
    const result = await animalService.getAll()

    res.render('animals/search', {result})
})

router.post('/search', async (req, res) => {
    const {search} = req.body;
    
    const result = await animalService.searchAnimal(search)
    
    res.render('animals/search', {result})
})

module.exports = router;