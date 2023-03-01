function addNSubtract(arr){
    let sumOriginalArr = 0;
    let sumNewArr = 0;
    for (let index=0; index <= arr.length-1; index++ ){
        sumOriginalArr += arr[index];
        if(arr[index] % 2 == 0){
            arr[index] += index;
        }else{
            arr[index] -= index;
        }
        sumNewArr += arr[index];
    }
    console.log(arr);
    console.log(sumOriginalArr);
    console.log(sumNewArr);
}
addNSubtract([5, 15, 23, 56, 35])