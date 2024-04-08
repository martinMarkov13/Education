const Stone = require('../models/Stone')

exports.create = (stoneData) => Stone.create(stoneData)

exports.getAll = () => Stone.find().lean()

exports.findOne = (stoneId) => Stone.findById(stoneId).populate('owner').lean()

exports.deleteStone = (stoneId) => Stone.findByIdAndDelete(stoneId)

exports.editStone = (stone, stoneData) => Stone.updateOne(stone, stoneData, { runValidators: true })

exports.likePost = async (stoneId, user) => {
    const stone = await Stone.findById(stoneId);
   
    const hasLiked = stone.likedList.includes(user)

    if(!hasLiked){
        stone.likedList.push(user)

        stone.save()
    }else{
        throw new Error("You have already liked that stone!")
    }
}

exports.searchStone = async (search) => {
    const stones = await Stone.find().lean()
   
    result = stones.filter(s => s.name.includes(search))
    
    return result;
}