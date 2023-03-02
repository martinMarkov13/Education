function palindromeInt(arr) {
  function isPalindrome(num) {
    let startNum = num;
    let reverseNum = Number(num.toString().split("").reverse().join(""));
    if (startNum === reverseNum) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    console.log(isPalindrome(currNum));
  }
}
palindromeInt([123, 323, 421, 121]);
