function oddAndEvenSum(num) {
    let stringNum = num.toString();
  
    function totalOddSum(nqkvoChislo) {
        let oddSum=0;
        for(let i=0; i<nqkvoChislo.length; i++){
            let currentNum = Number(nqkvoChislo[i]);
            if(currentNum % 2 !==0){
                oddSum+=currentNum;
            }
        }
        return oddSum;
    }

    function totalEvenSum(drugoChislo) {
        let evenSum=0;
        for(let i=0; i<drugoChislo.length; i++){
            let currentNum = Number(drugoChislo[i]);
            if(currentNum % 2 ===0){
                evenSum+=currentNum;
            }
        }
        return evenSum;
    }
console.log(`Odd sum = ${totalOddSum(stringNum)}, Even sum = ${totalEvenSum(stringNum)}`);  
}
oddAndEvenSum(3495892137259234)