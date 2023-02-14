function lunchBreak(input){
    let seriesName = input[0]
    let episodeLenght = input[1]
    let breakLenght = input[2]
    let timeForLunch = breakLenght / 8
    let timeForRest = breakLenght / 4

    let vremeZaSerial = breakLenght - (timeForLunch + timeForRest)

    let ostavashtoVreme = Math.abs(vremeZaSerial - episodeLenght)
    
    if(vremeZaSerial>=episodeLenght){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(ostavashtoVreme)} minutes free time.`)
    } else {
       console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(ostavashtoVreme)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones",
"60",
"96"])




