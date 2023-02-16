function cinema(input){
    let projection = input[0]
    let redove = Number(input[1])
    let koloni = Number(input[2])
    let income = 0

    if(projection==="Premiere"){
         income = redove*koloni*12
    } 
    else if(projection==="Normal"){
        income = redove*koloni*7.50
    }
    else if(projection === "Discount"){
         income = redove*koloni*5
    }
    console.log(`${income.toFixed(2)} leva`)
} 
cinema(["Discount",
"12",
"30"])


