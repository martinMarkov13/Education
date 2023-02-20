function accountBalance(input) {
    let index = 0;
    let income = input[index];
    let total = 0;

    while (income !== "NoMoreMoney") {
        let elementAsNumber = Number(income);
        if (income < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += elementAsNumber;
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        index++;
        income = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`)
}
accountBalance(["120",
"45.55",
"-150"])

