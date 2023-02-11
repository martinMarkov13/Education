function FishTank(input){
    let duljina = Number (input[0])
    let shirochina = Number(input[1])
    let visochina = Number(input[2])
    let procent = Number(input[3])

    let obemAkvariumCM = (duljina*shirochina*visochina) / 1000
    let zaetoProstranstvo = obemAkvariumCM * (procent / 100)
    let nujniLitri = obemAkvariumCM - zaetoProstranstvo
    console.log(nujniLitri)
}
FishTank(["85 ",
"75 ",
"47 ",
"17 "]
)