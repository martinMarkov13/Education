function townsToJson(array) {
  array.shift();
  let result = [];
  for (let towns of array) {
    let townInfo = towns
      .split(`|`)
      .filter((t) => t.length != 0)
      .map((a) => a.trim());
    let townName = townInfo[0];
    let townLatitute = Number(townInfo[1]).toFixed(2);
    let townLongitude = Number(townInfo[2]).toFixed(2);
    
    let obj = {
      Town: townName,
      Latitude: +townLatitute,
      Longitude: +townLongitude,
    };
    result.push(obj);
  }
  console.log(JSON.stringify(result));
}
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
