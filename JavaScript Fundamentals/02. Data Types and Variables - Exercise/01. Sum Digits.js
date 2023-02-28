function sumDigits(num){
    let numAsString = String(num);
    let sum = 0;
    for(let i=0; i<numAsString.length; i++){
        sum += Number(numAsString.charAt(i));
        
    }
    console.log(sum);
}
sumDigits(543)