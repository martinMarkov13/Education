const uniqid = require('uniqid')
const cubes = [
    {
        id: "141fdsfasf4t",
        name: "GAN 356 Air",
        description: "fhausdashudasuda",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg",
        difficultyLevel: "3"
    },
    {
        id: "352352sdasdasd",
        name: "GG MARTO",
        description: "fhausdashudasuda",
        imageUrl: "https://rubik.bg/8826-large_default/originalen-kub-na-rubik-3x3x3-rubiks-phantom-cube.jpg",
        difficultyLevel: "3"
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if(search){
        result = result.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result;
}

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId )

exports.createCube = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube)

    return newCube;
}

