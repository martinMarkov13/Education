function magicMatrices(matrix) {
 let isMagical = true;
  for (let i = 0; i < matrix.length-1; i++) {
      let sumRowOne = matrix[i].reduce((a,b)=> a+b,0);
      let sumRowTwo = matrix[i+1].reduce((a,b)=> a+b,0);
      let sumColOne = 0;
      let sumColTwo = 0;
    for (let j = 0; j < matrix.length; j++) {
      sumColOne+= matrix[i][j];
      sumColTwo += matrix[i+1][j];
    }
    if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
        isMagical = false;
    }
  }
return isMagical;
}
console.log(magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
