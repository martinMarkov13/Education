function timeAdd15Minutes(input){
    let hours = Number(input[0])
    let minutes = Number(input[1])
    
    let totalMinutes = hours * 60 + minutes + 15
    let h = Math.floor(totalMinutes/60)
    let m = totalMinutes % 60
    console.log(totalMinutes)
    console.log(m)

    if(h>23){
        h = 0
    }

    if(m<10){
    console.log(`${h}:0${m}`);
    } else 
    console.log(`${h}:${m}`);
}
timeAdd15Minutes(["12", "49"])