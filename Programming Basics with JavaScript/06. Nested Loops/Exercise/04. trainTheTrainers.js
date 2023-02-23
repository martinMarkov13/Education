function trainTheTrainers(input){
    let index=0;
    let juryCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalAverageGrade=0;   
    let presentationCounter = 0; 

    while(command !== "Finish"){
        let presentation = command;
        let avg = 0;
        let gradeSum = 0;
        presentationCounter++;
        for(let i=0; i<juryCount; i++){
            let grade = Number(input[index]);
            index++;
            gradeSum+=grade;
        }
        avg = gradeSum / juryCount;
        console.log(`${presentation} - ${avg.toFixed(2)}.`);
        totalAverageGrade+= avg;
        command = input[index];
        index++;
    }
    let assessment = totalAverageGrade / presentationCounter
    console.log(`Student's final assessment is ${assessment.toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])



