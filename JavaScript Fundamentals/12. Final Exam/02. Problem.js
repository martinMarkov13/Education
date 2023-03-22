function easterEggs(input) {
    let text = input[0];
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+\W*\/+(?<number>\d+)\/+/gm;
    let match = pattern.exec(text);
    while(match !== null){
        console.log(`You found ${(match.groups.number)} ${match.groups.color} eggs!`);
        match = pattern.exec(text);
    }
  }
easterEggs([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
