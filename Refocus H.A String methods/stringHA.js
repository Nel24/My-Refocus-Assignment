let str = "there is a storm coming to the East of the Philippines";
let arrStr = str.split("");

arrStr.find(function (element) {
  if (element === element.toUpperCase()) {
    var char = element.toUpperCase();
    console.log(char);
  }
});
