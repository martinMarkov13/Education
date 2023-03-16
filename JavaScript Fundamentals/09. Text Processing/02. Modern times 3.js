function solve(text){
    text = text.split(" ");
    let result = [];
    for(let string of text){
        if(string.startsWith("#")&& string.length>1){
            result.push(string.substring(1, string.length))
        }
    }
 
 
 
    let newRes = [];
    for(let word of result){
        word = word.split("");
        let flag = true;
 
        for(let i= 0;i<=word.length-1; i++){
            let currChar = word[i].charCodeAt(0);
            if((currChar<65||currChar> 90)&& (currChar<97||currChar>122)){
 
                flag=false;
            }
 
 
        }
        if(flag ==true){
            newRes.push(word.join(""));
        }
    }
 newRes.forEach(el=>console.log(el))
}solve(('Nowadays everyone uses # to tag a #special word in #socialMedia'))
