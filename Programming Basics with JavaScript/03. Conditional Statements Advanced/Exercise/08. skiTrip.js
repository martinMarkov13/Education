function skiTrip(input){
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let sum=0;

    if(type==="room for one person"){
        sum = (days-1) * 18.00;
    } else if(type==="apartment"){
        sum = (days-1)*25.00;
        if(days<10){
            sum = sum * 0.70;
        } else if(days>10 && days < 15){
            sum = sum * 0.65;
        }else{
            sum = sum * 0.50;
        }
    }else{
        sum = (days-1)*35.00;
        if(days<10){
            sum = sum * 0.90;
        } else if(days>10 && days < 15){
            sum = sum * 0.85;
        }else{
            sum = sum * 0.80;
        }
    }
    if(grade==="positive"){
        sum = sum * 1.25;
    }else{
        sum = sum * 0.90;
    }
    console.log(sum.toFixed(2))
}
skiTrip(["30",
"president apartment",
"negative"])





