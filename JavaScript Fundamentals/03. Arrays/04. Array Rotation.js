function arrayRotation(arr,n){
    let slice = [];
    let newArr = [];

    while(n>=arr.length){
        n -= arr.length
    }
    for(let i = n; i<arr.length; i++){
        slice.push(arr[i]);
    }
    for(let j = 0; j<n; j++){
        newArr.push(arr[j]);
    }
let result = slice.concat(newArr);
console.log(result.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5 )


