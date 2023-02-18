function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let totalPoints = 0;
    totalPoints += startingPoints;
    let wins = 0;
    for (i = 0; i <= tournaments; i++) {
        let stage = input[index];
        index++;
        switch (stage) {
            case "W": totalPoints += 2000;
            wins++;
            break;
            case "F": totalPoints += 1200; break;
            case "SF": totalPoints += 720; break;
        }
    }
let averagePoints = (totalPoints - startingPoints) / tournaments;
let percentWins = wins / tournaments *100;
console.log(`Final points: ${totalPoints}`);
console.log(`Average points: ${Math.floor(averagePoints)}`);
console.log(percentWins.toFixed(2) + `%`);
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

