function stringSubstring(word,text){
word = word.toLowerCase();
let splitted = text.toLowerCase().split(" ")
let isFound = false;

for (let element of splitted) {
    if(element === word){
    console.log(word);
    isFound = true;
    }
}
if(isFound==false){
    console.log(`${word} not found!`);
}
}
stringSubstring('python',
'JavaScript is the best programming language'

)