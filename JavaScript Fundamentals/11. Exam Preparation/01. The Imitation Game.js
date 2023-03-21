function imitationGame(input){
let message = input.shift();
while(input[0] !=="Decode"){
    let line = input.shift().split("|");
    let command = line[0];
    if(command == "Move"){
        let numberOfDigits = line[1];
        let digits = message.slice(0,numberOfDigits);
        message = message.slice(numberOfDigits,)+digits
    }else if(command == "Insert"){
        let index = line[1];
        let letter = line[2];
        let leftPart = message.slice(0,index);
        let rightPart = message.slice(index,);
        message = leftPart + letter + rightPart
    }else if(command =="ChangeAll"){
        let param1 = line[1];
        let param2 = line[2];
        message = message.split(param1).join(param2)
    }
}
console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )