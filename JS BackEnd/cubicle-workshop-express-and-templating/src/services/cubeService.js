const Cube = require("../models/Cube");

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();
  //TODO use mongoose to filter in the DB
  if (search) {
    result = result.filter((cube) =>
      cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId); //can be used .lean() here too instead of cubeController
// exports.getOneLean = (cubeId) => this.getOne(cubeId).lean();
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories')

exports.createCube = async (cubeData) => {
  const cube = new Cube(cubeData);
  await cube.save();

  return cube;
};

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData)

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)

exports.attachAccessory = async (cubeId, accessoryId) => {
  //Method 1
  // return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId }});

  //Method 2
  const cube = await Cube.findById(cubeId)
  cube.accessories.push(accessoryId)

  return cube.save()
};


