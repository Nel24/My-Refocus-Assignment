let articles = "there is a storm coming to the East of the Philippines";
let str = articles.split("");

str.forEach(function (element) {
  let char = element;
  if (char === char.toUpperCase()) {
    let Char = char.toUpperCase();
    console.log(Char);
  }
});
