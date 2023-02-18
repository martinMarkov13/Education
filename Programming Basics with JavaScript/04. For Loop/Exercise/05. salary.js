function salary(input){
    let index = 0;
    let tabsCount = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    

        for(let i=1; i<=tabsCount; i++){
            let currentTab = input[index];
            index++
            switch(currentTab){
                case "Facebook": salary-=150; break;
                case "Instagram": salary-=100;break;
                case "Reddit": salary-=50;break;
            }
            if(salary<=0){
                console.log(`You have lost your salary.`);
                break;
            }
    }
    if(salary>0){
    console.log(Math.trunc(salary));
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

