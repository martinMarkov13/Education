function shopping(input){
    let budget = Number(input[0])
    let GPUbroi = Number(input[1])
    let CPUbroi = Number(input[2])
    let RAMbroi = Number(input[3])

    let cenaGPU = 250 * GPUbroi
    let cenaCPU = (cenaGPU * 0.35) * CPUbroi
    let cenaRAM = (cenaGPU * 0.10) * RAMbroi

    let obshtaSuma = cenaGPU + cenaCPU + cenaRAM

    if(GPUbroi>CPUbroi){
        obshtaSuma = obshtaSuma * 0.85
    }
    let diff = Math.abs(budget - obshtaSuma)
    if(obshtaSuma<=budget){
       
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])


