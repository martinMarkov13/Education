function arrayRot(arr,rotations){
    for(let index = 0; index<rotations;index++){
        let currentNum = arr.shift();
        arr.push(currentNum);
    }
    console.log(arr.join(" "));
}
arrayRot([51, 47, 32, 61, 21], 2)