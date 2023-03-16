function 	pascalCaseSplitter(input){
    let result = [];
    let currentWord = input[0];
    
    for(let i=1; i<input.length; i++){
    let char = input[i]
    
    if(char !== char.toUpperCase()){
    currentWord = currentWord.concat(char)
    }else{
    result.push(currentWord)
    currentWord=char
    }
    }
    result.push(currentWord)
    console.log(result.join(", "))
    }