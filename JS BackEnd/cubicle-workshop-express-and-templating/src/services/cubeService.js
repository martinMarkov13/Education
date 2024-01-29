 
const cubes = [];

exports.getAll = () => cubes.slice();

exports.createCube = (cubeData) => {
    const newCube = cubes.push({
        id: cubes.length + 1,
        ...cubeData
    });

    cubes.push(newCube)

    return newCube;

}