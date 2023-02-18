function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let incomeMoney = 10;
    let toysCounter = 0;   

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += incomeMoney;
            incomeMoney += 10;
            money -= 1;
        } else {
            toysCounter++
        }
    }
    
    let sum = toyPrice*toysCounter + money;
    let diff = Math.abs(sum - washingMachinePrice);

    if (sum >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",
    "1570.98",
    "3"])

