const arr = [
    "Web developer",
    "Refocus",
    "Web developer",
    "Web developer",
    "Refocus",
    "Awesome",
];

// const count = {};

// arr.reduce((accumulator, currentValue) => {
//     if (count.hasOwnProperty(currentValue)) {
//         count[currentValue] += 1;
//     }
//     else{
//         count[currentValue] = 1;
//     }
// }, 0);

// console.log(count);





const count = arr.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    // This one || or short circuit eval is parang if and else den
    // (acc[element] || 0) this means if the element key does exist on acc object (if true return the first true value, if false return the last evaluated expression)
    //Web developer = (acc[elem] = null || 0) first expression is false then it returns 0 so 0 + 1 = 1 then it updates the object 
    return acc;
}, {});

console.log(count);


