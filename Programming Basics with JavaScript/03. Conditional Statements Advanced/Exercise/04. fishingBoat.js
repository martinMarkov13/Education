function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let sum = 0;

    if(season=== "Spring" ){
        sum = 3000;
        if(fishermans<=6){
            sum = sum * 0.90;
        } else if(fishermans>=7 && fishermans<=11){
            sum = sum * 0.85; 
        } else{
            sum = sum * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn"){
        sum = 4200;
        if(fishermans<=6){
            sum = sum * 0.90;
        } else if(fishermans>=7 && fishermans<=11){
            sum = sum * 0.85;
        } else{
            sum = sum * 0.75;
        }
    } else if (season=== "Winter"){
        sum = 2600;
        if(fishermans<=6){
            sum = sum * 0.90;
        } else if(fishermans>=7 && fishermans<=11){
            sum = sum * 0.85;
        } else{
            sum = sum * 0.75;
        }
    }
    
    if(fishermans % 2 === 0 && season !== "Autumn" ){
        sum = sum * 0.95;
    }

    let diff = Math.abs(budget-sum);
    if(budget>=sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
"Summer",
"11"])


