const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Photo name is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  commentList: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        required: [true, "User is required"],
        ref: 'User',
      },
      comment: {
        type: String,
        required: [true, "Comment text is required"],
      },
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo;
