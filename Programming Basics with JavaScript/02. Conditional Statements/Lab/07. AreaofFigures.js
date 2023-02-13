function licaNaFiguri(input){
    let vidFigura = (input[0])

    if (vidFigura === "square"){
    let strana = (input[1])
    let lice = strana * strana
    console.log(lice.toFixed(3))
    }
    if (vidFigura === "rectangle"){
        let strana1 = (input[1])
        let strana2 = (input[2])
        let lice = strana1 * strana2
        console.log(lice.toFixed(3))
    }
    if (vidFigura === "circle"){
        let radius = (input[1])
        let lice = Math.PI*radius*radius
        console.log(lice.toFixed(3))
    }
    if (vidFigura === "triangle"){
        let strana = (input[1])
        let visochina = (input[2])
        let lice = (strana*visochina) / 2
        console.log(lice.toFixed(3));
    }

}
licaNaFiguri(["triangle", "4.5", "20"])