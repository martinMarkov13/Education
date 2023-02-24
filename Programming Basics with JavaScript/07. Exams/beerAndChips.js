function beerAndChips(input){
    let name = input[0];
    let budget = Number(input[1]);
    let bottlesBeer = Number(input[2]);
    let chipsPacks = Number(input[3]);

    let beerPrice = bottlesBeer*1.20;
    let chipsPrice = beerPrice * 0.45;
    let totalChipsPrice = Math.ceil(chipsPrice * chipsPacks);

    let totalSum = totalChipsPrice + beerPrice;
    let diff = Math.abs(budget - totalSum);

    if(budget >= totalSum){
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }
}
beerAndChips(["Valentin","5","2","4"])