const Photo = require("../models/Photo");

exports.getAll = () => Photo.find().populate("owner");

exports.getOne = (photoId) => Photo.findById(photoId).populate("owner");

exports.createPhoto = async (photoData) => await Photo.create(photoData);

exports.deletePhoto = (photoId) => Photo.findByIdAndDelete(photoId);

exports.editPhoto = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.addComment = async (photoId, commentData) => {
    const photo = await Photo.findById(photoId);
    
    photo.commentList.push(commentData)

    return photo.save()
}

exports.getMine = (userId) => Photo.find({ owner: userId });