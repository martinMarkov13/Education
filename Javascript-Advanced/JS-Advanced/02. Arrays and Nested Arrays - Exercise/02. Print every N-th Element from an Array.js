function nth(arr, step) {
return arr.filter((element, index) => index % step ==0);
}
nth(["5", "20", "31", "4", "20"], 2);
