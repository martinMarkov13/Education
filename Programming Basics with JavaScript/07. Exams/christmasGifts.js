function christmasGifts(input){
    let index = 0;
    let command = input[index];
    index++;
    let adultsCounter = 0;
    let kidsCounter = 0;
    let toysCounter = 0;
    let sweatersCounter = 0;

    while(command !== "Christmas"){
        let age = Number(command);
        if(age<=16){
            kidsCounter++;
        }else{
            adultsCounter++;
        }
        command=input[index];
        index++;
    }
    console.log(`Number of adults: ${adultsCounter}`);
    console.log(`Number of kids: ${kidsCounter}`);
    let moneyForToys = kidsCounter * 5;
    let moneyforSweaters = adultsCounter * 15;
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyforSweaters}`);
}

christmasGifts
(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
