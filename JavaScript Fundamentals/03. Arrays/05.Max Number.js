function maxNumber(arr){
    let topInteger = [];
    for(let index = 0; index < arr.length; index++){
        let currentEl = arr[index];
        let isFound = true;
        for(let j=index+1; j<arr.length; j++){
            let nextEl = arr[j];
            if(currentEl<=nextEl){
                isFound = false;
                break;
            }
        }
        if(isFound){
            topInteger.push(currentEl); 
    }
    }
    console.log(topInteger.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17])