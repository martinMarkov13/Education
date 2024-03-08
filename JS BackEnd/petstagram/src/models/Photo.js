const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Photo name is required"],
    minLength: [2, "Name is too short"]
  },
  image: {
    type: String,
    required: [true, "Image is required"],
    match: [/^https:\/\//, "Email is not in the correct format"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: 1,
    max: 100,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: 5,
    maxLength: 50
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minLength: 5,
    maxLength: 50
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
