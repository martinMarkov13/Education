function goldMine(input) {
    let locationsCount = Number(input[0]);
    let index = 1;
    let estAvgIncome = Number(input[index]);
    index++;
    let totalPerDay = 0;

    for (let i = 0; i < locationsCount; i++) {
        let days = Number(input[index]);
        index++;
        for (let j = 0; j < days; j++) {
            let dayIncome = Number(input[index]);
            totalPerDay += dayIncome;
            index++;
           
        }
        let avgIncome = totalPerDay / days;
        if (avgIncome >= estAvgIncome){
            console.log(`Good job! Average gold per day: ${avgIncome.toFixed(2)}.`);
        } else{
            let diff = Math.abs(avgIncome - estAvgIncome);
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
        totalPerDay=0;
        estAvgIncome = Number(input[index]);
        index++;
    }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
