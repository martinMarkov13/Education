function equalSum(arr){
    areSumsEqual = false;

    for(let index=0; index<arr.length; index++){
        let leftSum = 0;
        let rightSum = 0;

        for(let j=index-1; j>=0; j--){
            leftSum+= arr[j];
        }
        for(let k= index+1; k<arr.length; k++){
            rightSum+= arr[k];
        }
        if(leftSum === rightSum){
            console.log(index);
            areSumsEqual=true
        }
    }
    if(!areSumsEqual){
        console.log(`no`);
    }
}
equalSum([1, 2])