function maxSeq(arr){
    let newArr=[];
    let firstArr=[];

    for(let index = 0; index < arr.length; index++){
        firstArr = [];
        for(let j=index; j < arr.length; j++){
            if(arr[index]=== arr[j]){
                firstArr.push(arr[j]);
            }else{
                break;
            }
        }
        if(firstArr.length > newArr.length){
            newArr=firstArr;
        }
    }
console.log(newArr.join(" "));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])