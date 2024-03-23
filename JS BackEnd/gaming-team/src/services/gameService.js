const Game = require("../models/Game");

exports.getAll = () => Game.find().populate("owner").lean();

exports.getSearched = async (search, platform) => {
  let games = await Game.find().lean()
  let result = []

  if (search) {
   result = games.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (platform) {
    result = games.filter((g) => g.platform == platform);
  }

  return result;
};

exports.createGame = (gameData) => Game.create(gameData);

exports.getOneGame = (gameId) => Game.findById(gameId).populate("owner");

exports.deleteGame = (gameId) => Game.findOneAndDelete(gameId);

exports.updateGame = (gameId, gameData) =>
  Game.findByIdAndUpdate(gameId, gameData);

exports.isBought = async (gameId, userId) => {
  const game = await Game.findById(gameId);

  return game.boughtBy.includes(userId);
};

exports.buyGame = async (gameId, buyerId) => {
  const game = await Game.findById(gameId);
  const isAlreadyBought = game.boughtBy.includes(buyerId);

  if (!isAlreadyBought) {
    game.boughtBy.push(buyerId);
    return game.save();
  } else {
    throw new Error("Game is already bought!");
  }
};
