const Stone = require('../models/Stone')

exports.create = (stoneData) => Stone.create(stoneData)

exports.getAll = () => Stone.find().lean()

exports.findOne = (stoneId) => Stone.findById(stoneId).populate('owner').lean()

exports.deleteStone = (stoneId) => Stone.findByIdAndDelete(stoneId)

exports.editStone = (stone, stoneData) => Stone.findByIdAndUpdate(stone, stoneData)