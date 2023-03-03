const arr = [
    "Web developer",
    "Refocus",
    "Web developer",
    "Web developer",
    "Refocus",
    "Awesome",
];

/*The logic here is that the hasOwnProperty checks on the arr array if the given object has a the same properties on the element, if it does then it increments if not it initialized or equate to 1 */

const count = {};

arr.map((element) => {
    if(count.hasOwnProperty(element)){
        count[element] += 1;//count[element] = count[element] + 1
    }
    else{
        count[element] = 1;
    }
});

console.log(count);



////////////////////////////////////MY SOLUTION////////////////////
const objArr = {};
let webcount = 0;
let refCount =0;
let aweCount =0;
arr.map( function (element) {
    if (element === "Web developer") {
        webcount++
        return objArr["Web developer"] = webcount;
    }
    else if (element === "Refocus") {
        refCount++
        return objArr["Refocus"] = refCount;
    }
    else{
        aweCount++
        return objArr["Awesome"] = aweCount;
    }
});