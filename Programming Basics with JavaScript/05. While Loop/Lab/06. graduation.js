function graduation(input){
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index=0;
    let isExcluded = false;
    
    while(grades<=12){
        index++;
        let grade =Number(input[index]);
        if(grade < 4){
            excluded++;
            continue;
        }
        if(excluded>1){
            console.log(`${name} has been excluded at ${grades} grade`)
            isExcluded = true;
            break;
        }
        sum+= grade;
        grades++;
    }
    let average = sum/12;
    if(!isExcluded){
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
