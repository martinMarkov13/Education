const Volcano = require('../models/Volcano')

exports.getAll = () => Volcano.find().lean()

exports.createVolcano = (volcanoData) => Volcano.create(volcanoData)

exports.getOne = (volcanoId) => Volcano.findById(volcanoId).populate("owner");

exports.deleteVolcano = (volcanoId) => Volcano.findByIdAndDelete(volcanoId)

exports.updateVolcano = (volcano, updateData) => Volcano.updateOne(volcano, updateData, { runValidators: true })

exports.vote = async (volcanoId, user) => {
    const volcano = await Volcano.findById(volcanoId);
   
    const hasVoted = volcano.voteList.includes(user)

    if(!hasVoted){
        volcano.voteList.push(user)

        volcano.save()
    }else{
        return
    }
}