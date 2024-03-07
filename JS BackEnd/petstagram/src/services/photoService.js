const Photo = require('../models/Photo')

exports.getAll = () => Photo.find().populate('owner')

exports.getOne = (photoId) => Photo.findById(photoId).populate('owner')

exports.createPhoto = async (photoData) => await Photo.create(photoData)
