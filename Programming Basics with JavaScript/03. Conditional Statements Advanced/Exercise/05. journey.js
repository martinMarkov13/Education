function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let type;
    let sum = 0; 

    if(budget<=100){
        destination = "Bulgaria";
        if(season === "summer"){
            type = "Camp";
            sum = 0.30 * budget;
        } else if(season=== "winter"){
            type = "Hotel"
            sum = 0.70 * budget;
        }
    
    } else if(budget>100 && budget <=1000){
        destination = "Balkans";
        if(season=== "summer"){
            type = "Camp";
            sum = 0.40 * budget;
        }else {
            type = "Hotel";
            sum = 0.80 * budget;
        }

    } else{
        destination = "Europe";
        sum = 0.90 * budget;
        type = "Hotel";
    }
    
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${sum.toFixed(2)}`)
}
journey(["678", "winter"])