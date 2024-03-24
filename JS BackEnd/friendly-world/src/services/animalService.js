const Animal = require('../models/Animal')

exports.getAll = async () => await Animal.find().populate('owner').lean();

exports.create = (animalData) => Animal.create(animalData);

exports.getOne = async (animalId) => await Animal.findById(animalId).populate("owner").lean();

exports.donate = async (animalId, donatorId) => {
    const animal = await Animal.findById(animalId)

    const hasDonated = animal.donations.includes(donatorId)

    if(!hasDonated){
        animal.donations.push(donatorId)
    
        return animal.save() 
    }else{
        throw new Error("Already donated!") 
    }
}

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId)

exports.editAnimal = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData)

exports.searchAnimal = async (search) => {
    let animals = await Animal.find().lean()

    if(search){
        animals = animals.filter(a => a.location.toLowerCase().includes(search.toLowerCase()))
    }
    return animals;
}