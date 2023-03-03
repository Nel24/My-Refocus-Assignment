const arr = [
    "Web developer",
    "Refocus",
    "Web developer",
    "Web developer",
    "Refocus",
    "Awesome",
];

const objArr = {};
let count = 0;
arr.map( function (element) {
    if (element === "Web developer") {
        count += 1
        return objArr["Web developer"] = count;
    }
    else if (element === "Refocus") {
        count += 1
        return objArr["Refocus"] = count;
    }
    else{
        count += 1
        return objArr["Awesome"] = count;
    }
});

console.log(objArr);