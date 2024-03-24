const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [2, "Name is too short"],
    },
    years: {
      type: Number,
      required: true,
      min: [1, "Years must be between 1 and 100"],
      max: [100, "Years must be between 1 and 100"]
    },
    kind: {
      type: String,
      required: true,
      minLength: [3, "Kind is too short"],
    },
    image: {
      type: String,
      required: true,
      match: [/^https:\/\//, "Image is not in the correct format"],
    },
    need: {
      type: String,
      required: true,
      minLength: [3, "Min length of need is 3"],
      maxLength: [20, "Max length of need is 20"],
    },
    location: {
      type: String,
      required: true,
      minLength: [5, "Min length is 3"],
      maxLength: [15, "Max length is 15"],
    },
    description: {
      type: String,
      required: true,
      minLength: [5, "Min length is 5"],
      maxLength: [50, "Max length is 50"],
    },
    donations: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  }
);

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
