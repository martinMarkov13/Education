function sumOfTwoNumbers(input){
    let startingNumber= Number(input[0]);
    let endingNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;
    
    for(let i = startingNumber; i<=endingNumber; i++){
        for(let j=startingNumber; j<=endingNumber; j++){
            counter++;
            if(i+j=== magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isFound=true;
                break;
            }
        }
        if(isFound===true){
            break;
        }
    }
    if(!isFound){
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}   
sumOfTwoNumbers(["1",
"10",
"5"])


