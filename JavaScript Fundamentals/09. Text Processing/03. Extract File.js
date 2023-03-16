function extractFile(input){
let file = input.split("\\").pop()
let fileName = file.substring(0,file.lastIndexOf("."));
let extension = file.substring(file.lastIndexOf(".")+1)
console.log(`File name: ${fileName}`);
console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')