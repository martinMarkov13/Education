function cutAndReverse(input){
    let firstHalf = "";
    let secondHalf = "";
    for(let i=input.length-1;i>=input.length/2;i--){
    secondHalf+= input[i];
    }
    for(let i=input.length/2 - 1;i>=0;i--){
    firstHalf +=input[i]
    }
    console.log(firstHalf)
    console.log(secondHalf)
    }