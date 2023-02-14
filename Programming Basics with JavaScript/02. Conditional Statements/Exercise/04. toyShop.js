function toyShop(input){
    let cenaEkskurziq = Number(input[0])
    let broiPuzeli = Number(input[1])
    let broiKukli = Number(input[2])
    let broiMecheta = Number(input[3])
    let broiMinioni = Number(input[4])
    let broiKamioncheta = Number(input[5])
    let obshtBroiIgrachki = broiKukli + broiMecheta + broiMinioni +broiPuzeli + broiKamioncheta
    
    let obshtaCena = (broiKukli*3) + (broiKamioncheta*2) + (broiMecheta*4.10) + (broiMinioni*8.20) +
     (broiPuzeli*2.60)
  
    if(obshtBroiIgrachki>=50){
        obshtaCena = obshtaCena*0.75
    }
    obshtaCena = obshtaCena*0.90
    let ostavashtiPari = Math.abs(obshtaCena - cenaEkskurziq) 
    if(obshtaCena >= cenaEkskurziq){
        console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`)
    } else {
    console.log(`Not enough money! ${ostavashtiPari.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


