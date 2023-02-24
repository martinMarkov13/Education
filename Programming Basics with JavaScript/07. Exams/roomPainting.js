function roomPainting(input){
    let paintBoxes = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintPrice = paintBoxes * 21.50;
    let wallpaperPrice = wallpaperRolls*5.20;

    let glovesNeeded =Math.ceil(wallpaperRolls * 0.35);
    let totalGlovesPrice = glovesNeeded*glovesPrice;

    let brushNeeded = Math.floor(paintBoxes * 0.48);
    let totalBrushesprice = brushNeeded*brushPrice;

    let totalSum = totalGlovesPrice + totalBrushesprice + paintPrice + wallpaperPrice;
    let delivery = totalSum / 15;
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}
roomPainting(["10","8","2.2","5"])