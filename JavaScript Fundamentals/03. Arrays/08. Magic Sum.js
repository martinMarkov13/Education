function magicSum(arr,sum){
    let firstNum = 0;
    let secondNum = 0;
    for(let index=0; index < arr.length; index++){
        firstNum = arr[index];
        for(let j=index+1; j < arr.length; j++){
            secondNum = arr[j];
            if(firstNum+secondNum === sum){
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],8)
console.log(`------------`);
magicSum([14, 20, 60, 13, 7, 19, 8],27)
console.log(`------------`);
magicSum([1, 2, 3, 4, 5, 6],6)