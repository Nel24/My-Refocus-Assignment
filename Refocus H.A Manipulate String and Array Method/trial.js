const arr = [
    "Web developer",
    "Refocus",
    "Web developer",
    "Web developer",
    "Refocus",
    "Awesome",
];
// const count ={};
// arr.map(function (element) {
//     count[element] = (count[element] || 0) + 1; // Short circuit evaluation
// });

// console.log(count);


const count ={};
arr.map(function (element) {
    (count[element]) ? (count[element] += 1) : (count[element] = 1);// ternary operator
});

console.log(count);