const arr = [
    "Web developer",
    "Refocus",
    "Web developer",
    "Web developer",
    "Refocus",
    "Awesome",
];



const count = arr.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
}, {});

console.log(count);