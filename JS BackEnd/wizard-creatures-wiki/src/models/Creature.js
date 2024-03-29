const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name is too short"]
  },
  species: {
    type: String,
    required: true,
    minLength: [3, "Species is too short"]
  },
  skinColor: {
    type: String,
    required: true,
    minLength: [3, "Skin color is too short"]
  },
  eyeColor: {
    type: String,
    required: true,
    minLength: [3, "Eye color is too short"]
  },
  image: {
    type: String,
    required: true,
    match: [/^https:\/\//, "Email is not in the correct format"]
  },
  description: {
    type: String,
    required: true,
    minLength: [5, "Skin color is too short"],
    maxLength: [500, "Description is too long"]
  },
  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Creature = mongoose.model("Creature", creatureSchema)

module.exports = Creature;