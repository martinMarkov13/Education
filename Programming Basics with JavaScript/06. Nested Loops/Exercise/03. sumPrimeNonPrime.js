function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;
    let index = 0;
    let command = input[index];
    index++;


    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrime += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])


