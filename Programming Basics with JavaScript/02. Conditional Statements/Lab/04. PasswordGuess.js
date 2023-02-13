function passwordGuess(input){
    let password = input[0]
    let fraza = "s3cr3t!P@ssw0rd"
    if (password === fraza){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
    }
passwordGuess(["s3cr3t!P@ssw0rd"])
