function summerOutfit(input){
    let degrees = Number(input[0])
    let timeOfTheDay = input[1]
    let outfit;
    let shoes;
        
    if(degrees>= 10 && degrees<=18){
       if(timeOfTheDay=== "Morning"){
         outfit = "Sweatshirt"
         shoes = "Sneakers"
       } else if(timeOfTheDay === "Afternoon"){
        outfit = "Shirt"
        shoes = "Moccasins"
       } else if(timeOfTheDay==="Evening"){
        outfit="Shirt"
        shoes="Moccasins"
       }
    } else if(degrees>18 && degrees<=24){
        if(timeOfTheDay==="Morning"){
            outfit="Shirt"
            shoes="Moccasins"
        }
        else if(timeOfTheDay==="Afternoon"){
            outfit="T-Shirt"
            shoes="Sandals"
        }
        else if(timeOfTheDay==="Evening"){
            outfit="Shirt"
            shoes="Moccasins"
        }

    }
    else if(degrees>=25){
        if(timeOfTheDay==="Morning"){
            outfit="T-Shirt"
            shoes="Sandals"
        }
        else if(timeOfTheDay==="Afternoon"){
            outfit="Swim Suit"
            shoes="Barefoot"
        }
        else if(timeOfTheDay=== "Evening"){
            outfit= "Shirt"
            shoes= "Moccasins"

        }
        
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["22",
"Afternoon"])

