function vacation(input){
    let index=0;
    let neededMoney = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;

    let totalDays=0;
    let spendDays=0;
    
    while(currentMoney<neededMoney) {
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        totalDays++;

        switch(command){
            case "save": 
                currentMoney+=tempMoney;
                spendDays=0;
                break;
            case "spend":
                spendDays++;
                currentMoney-=tempMoney;
            if(currentMoney<0){
                currentMoney=0;
            }
        }
        if(spendDays === 5){
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }
        
    }
    if(currentMoney >= neededMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


