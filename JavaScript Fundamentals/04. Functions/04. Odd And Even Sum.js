function oddAndEvenSum(num) {
    let stringNum = num.toString();
    let evenSum=0;
    let oddSum =0;
for(let i = 0; i < stringNum.length; i++){
    if(Number(stringNum[i]) % 2===0){
        evenSum+= Number(stringNum[i]);
    }else{
        oddSum+=Number(stringNum[i]);
    }
}
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)