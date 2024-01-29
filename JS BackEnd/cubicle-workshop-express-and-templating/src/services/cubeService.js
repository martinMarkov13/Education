const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => cubes.slice();

exports.createCube = (cubeData) => {
    const newCube = cubes.push({
        id: uniqid(),
        ...cubeData
    });

    cubes.push(newCube)

    return newCube;
}