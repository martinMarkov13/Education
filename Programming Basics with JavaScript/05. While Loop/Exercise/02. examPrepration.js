function examPreparation(input){
    let index=0;
    let badGrades =Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = 0;
    let counterBadGrades = 0;
    let tasksCounter = 0;
    let isNeedBreak = false;
    let lastProblem = "";

    while(command !== "Enough"){
        let taskName = command;
        lastProblem = taskName;
        let grade =Number(input[index]);
        sum += grade;
        tasksCounter++;
        index++;
        if(grade <=4){
            counterBadGrades++;
        }
        if(counterBadGrades === badGrades){
            console.log(`You need a break, ${badGrades} poor grades.`);
            isNeedBreak = true;
            break;
        }
        command = input[index];
        index++;
    }
    let average = sum / tasksCounter; 
    if(!isNeedBreak){
   console.log(`Average score: ${average.toFixed(2)}`);
   console.log(`Number of problems: ${tasksCounter}`);
   console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

