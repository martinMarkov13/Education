function fancryBarcodes(input) {
  let pattern = /@[#]{1,}[A-Z]([a-z0-9A-Z]){5,}@[#]{1,}/gm;
  let productCount = +input.shift();
  let digitsPattern = /\d+/g;

  while (productCount > 0) {
    let barcode = input.shift();
    let match = barcode.match(pattern);

    if (match !== null) {
      let productGroup = "";
      let product = match[0];

      let digits = product.match(digitsPattern);
      if (digits) {
        for (let dig of digits) {
          productGroup += dig;
        }
      }
      if (productGroup == "") {
        productGroup = "00";
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
    productCount--;
  }
}
fancryBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
console.log(`-----------------------------------`);
fancryBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
