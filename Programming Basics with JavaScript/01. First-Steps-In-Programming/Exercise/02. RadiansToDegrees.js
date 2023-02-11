function radiansToDegrees(input){
    let angleRadians = Number(input[0]);
    let angleDegrees = angleRadians * 180 / Math.PI
    console.log(angleDegrees);
}
radiansToDegrees([3.1416])