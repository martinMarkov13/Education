const Game = require('../models/Game')

exports.getAll = () => Game.find().populate('owner');

exports.createGame = (gameData) => Game.create(gameData)

exports.getOneGame = (gameId) => Game.findById(gameId).populate("owner");

exports.deleteGame = (gameId) => Game.findOneAndDelete(gameId);

exports.updateGame = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData)