function 	replaceRepeatingChars(input){
    let result = ""
    for(let i=0;i<input.length; i++){
    let char = input[i];
    if(char !== input[i+1] ){
    result += char
    }
    }
    console.log(result)
    }