const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [4, "The name must be at least 4 characters long"]
  }, 
  image: {
    type: String,
    required: true,
    match: [/^https:\/\//, "Email is not in the correct format"]
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "The description must be at least 10 characters long"]
  },
  genre: {
    type: String,
    required: true,
    minLength: [2, "The genre must be at least 2 characters long"]
  },
  platform: {
    type: String,
    enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    required: true,
  },
  boughtBy:[
    {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
