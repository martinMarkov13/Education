function worldSwimmingRecord(input){
    let worldRecord = Number(input[0])
    let distanceInMetres = Number(input[1])
    let timeInSeconds = Number(input[2])

    let time = distanceInMetres * timeInSeconds
    let suprotivlenie = Math.floor(distanceInMetres / 15)
    let rezultatIvan =  time + suprotivlenie * 12.5
    if(rezultatIvan<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${rezultatIvan.toFixed(2)} seconds.`)
    } else {
        let neobhodimoVreme = rezultatIvan - worldRecord
       console.log(`No, he failed! He was ${neobhodimoVreme.toFixed(2)} seconds slower.`) 

    }

}
worldSwimmingRecord(["10464",
"1500",
"20"])



