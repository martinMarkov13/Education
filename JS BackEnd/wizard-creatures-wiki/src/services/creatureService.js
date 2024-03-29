const Creature = require('../models/Creature')

exports.getAll = () => Creature.find().populate('owner').lean()

exports.create = (creatureData) => Creature.create(creatureData)

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId)

exports.getCreature = (creatureId) => Creature.findById(creatureId).populate('owner').lean()

exports.vote = async (creatureId, user) => {
    const creature = await Creature.findById(creatureId)

    const hasVoted = creature.votes.includes(user)

    if(!hasVoted){
        creature.votes.push(user)

        return creature.save()
    }

    throw new Error("You have alread voted!")
}

exports.edit = (creatureId, creatureData) => Creature.findByIdAndUpdate(creatureId, creatureData)

exports.getMine = (userId) => Creature.find({owner: userId}).populate('owner').lean()
