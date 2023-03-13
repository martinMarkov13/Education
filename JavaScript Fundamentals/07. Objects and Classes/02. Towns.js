function towns(input) {
  let object = {};
  for (let tokens of input) {
    let townInfo = tokens.split(" | ");

    object.town = townInfo[0];
    object.latitude = Number(townInfo[1]).toFixed(2);
    object.longitude = Number(townInfo[2]).toFixed(2);
    console.log(object);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
