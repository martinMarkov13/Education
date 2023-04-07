function sameNumbers(number){
let num = String(number);
    let sum = 0;
    let isSame = true;
    let firstDigit = num[0];
for (let i = 0; i < num.length; i++) {
    let currentDigit= +num[i];
    sum += currentDigit;
    if(firstDigit != currentDigit){
        isSame = false;
    }
}
console.log(isSame)
console.log(sum)
}
sameNumbers(2222222)