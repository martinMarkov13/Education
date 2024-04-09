const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [2, "Title is too short"]
  },
  author: {
    type: String,
    required: [true, "Author is required!"],
    minLength: [5,"Author name is too short"]
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
    match: [/^https:\/\//, "Image is not in the correct format"]
  },
  review: {
    type: String,
    required: [true, "Review is required!"],
    minLength: [10, "Review must be at least 10 characters long"]
  },
  genre: {
    type: String,
    required: [true, "Genre is required!"],
    minLength:[3, "Genre is too short"]
  },
  stars: {
    type: Number,
    required: [true, "Stars are required!"],
    min: 1,
    max: 5,
  },
  wishingLst: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    }
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;
