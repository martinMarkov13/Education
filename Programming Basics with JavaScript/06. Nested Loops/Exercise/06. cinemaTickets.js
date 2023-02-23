function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTicket = 0;
    let studentCounter = 0;
    let standartCounter = 0;
    let childCounter = 0;


    while (command !== "Finish") {
        let movie = command;
        let freeSpots = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;
        let soldTicket = 0;
        while (tempCommand !== "End") {
            soldTicket++;
            switch(tempCommand){
                case "student": studentCounter++;break;
                case "standard": standartCounter++;break;
                case "kid": childCounter++;break;
            }
            if(soldTicket >= freeSpots){
                break;
            }
            tempCommand = input[index];
            index++;
        }
        totalTicket += soldTicket;
        let tempEmptySpace = soldTicket / freeSpots *100; 
        console.log(`${movie} - ${tempEmptySpace.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
console.log(`Total tickets: ${totalTicket}`);
let studentPercent = studentCounter / totalTicket * 100;
let standartPercent = standartCounter / totalTicket * 100;
let kidPercent = childCounter / totalTicket *100;
console.log(`${studentPercent.toFixed(2)}% student tickets.`);
console.log(`${standartPercent.toFixed(2)}% standard tickets.`);
console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

