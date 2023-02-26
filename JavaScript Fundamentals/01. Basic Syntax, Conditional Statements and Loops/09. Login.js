function login(input){
    let username = input[0];
    let password = username.split("").reverse().join("");
    let tries = 0;
    
    for(let i=1; i<=4; i++){
        let currentPassword = input[i];
        if(currentPassword === password){
            console.log(`User ${username} logged in.`);
            break;
        }else{
            tries++;
            if(tries>=4){
                console.log(`User ${username} blocked!`);
            }else{
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}
login([`momo`, `omom`])
 