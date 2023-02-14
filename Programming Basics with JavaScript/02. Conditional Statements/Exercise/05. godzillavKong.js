function godzillavKong(input){
    let budget = Number(input[0])
    let broiStatisti = Number(input[1])
    let cenaOblekloZaEdinStatist = Number(input[2])

    let sumaDecor = budget * 0.1
    let sumaObleklo = broiStatisti * cenaOblekloZaEdinStatist
   

    if(broiStatisti>150){
        sumaObleklo = sumaObleklo * 0.90
    }
    let sumaZaFilm = sumaDecor + sumaObleklo
    let diff = Math.abs(budget - sumaZaFilm)
    if(sumaZaFilm>budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log("Action!" )
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillavKong(["9587.88",
"222",
"55.68"])


