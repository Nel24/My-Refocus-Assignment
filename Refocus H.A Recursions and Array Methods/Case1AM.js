const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

// const countRepeats = (arr) => {
//   const count = {};
//   arr.forEach((item) => {
//     count[item] = (count[item] || 0) + 1;
//   });
//   console.log(count);
// };

// countRepeats(arr);

const count = {};

arr.forEach(function (element) {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);
