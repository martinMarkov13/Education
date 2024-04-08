const mongoose = require('mongoose')

const stoneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    category:{
        type: String,
        required: [true, "Category is required"]
    },
    color:{
        type: String,
        required: [true, "Color is required"],
        minLength: [2, "Color must be at least 2 characters!"]
    },
    image:{
        type: String,
        required: [true, "Image Url is required"]
    },
    location:{
        type: String,
        required: [true, "Location is required"]
    },
    formula:{
        type: String,
        required: [true, "Formula is required"]
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    },
    likedList:[
        {
            type:mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
})

const Stone = mongoose.model("Stone", stoneSchema)

module.exports = Stone;