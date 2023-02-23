let str = "there is a storm coming to the East of the Philippines";
let arrStr = str.split("");

for (char of arrStr) {
  if (char === char.toUpperCase()) {
    // var upperChar = char.toUpperCase();
    // console.log(upperChar);
    break;
  } else {
    console.log(char);
  }
}
