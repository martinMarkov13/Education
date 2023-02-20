function password(input){
    let username = input[0];
    let password = input[1];
    let inputData = input[2];
    let index = 3;

    while(inputData !== password){
        inputData = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])

