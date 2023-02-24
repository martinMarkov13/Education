function catLife(input) {
    let species = input[0];
    let gender = input[1];
    let humanYears = 0;
    let catYears = 0;

    if (species === "British Shorthair") {
        if (gender === "m") {
            humanYears = 13;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 14;
            catYears = (humanYears * 12) / 6;
        } 
    } else if (species === "Siamese") {
        if (gender === "m") {
            humanYears = 15;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 16;
            catYears = (humanYears * 12) / 6;
        }
    } else if (species === "Persian") {
        if (gender === "m") {
            humanYears = 14;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 15;
            catYears = (humanYears * 12) / 6;
        } 
    } else if (species === "Ragdoll") {
        if (gender === "m") {
            humanYears = 16;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 17;
            catYears = (humanYears * 12) / 6;
        }
    } else if (species === "American Shorthair") {
        if (gender === "m") {
            humanYears = 12;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 13;
            catYears = (humanYears * 12) / 6;
        } 
    } else if (species === "Siberian") {
        if (gender === "m") {
            humanYears = 11;
            catYears = (humanYears * 12) / 6;
        } else if (gender === "f") {
            humanYears = 12;
            catYears = (humanYears * 12) / 6;
        }
    } else{
        console.log(`${species} is invalid cat!`);
    }
    if(catYears>0){
    console.log(`${Math.floor(catYears)} cat months`);
    }
}
catLife(["Tom",
"m"])



