////////////////////////////TASK 1//////////////////////////////////////

let obj = {
    num1:100,
    num2:50,
    sum:150,
    difference:50,
    product:500,
    quotient:20,
}

////////////////////////////TASK 2//////////////////////////////////////

function showData (){
    console.log(`First Number is: ${obj.num1}`);
    console.log(`Second Number is: ${obj.num2}`);
    console.log(`The Sum is: ${obj.num1 + obj.num2}`);
    console.log(`The Difference is: ${obj.num1 - obj.num2}`);
    console.log(`The Product is: ${obj.num1 * obj.num2}`);
    console.log(`The Quotient is: ${obj.num1 / obj.num2}`);
}



////////////////////////////TASK 3//////////////////////////////////////


function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}


////////////////////////////TASK 4//////////////////////////////////////

function newSetOfNumbers (num1, num2) {
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum =  add(num1, num2);
    obj.difference =  subtract(num1, num2);
    obj.product =  multiply(num1, num2);
    obj.quotient =  divide(num1, num2);
}



////////////////////////////TASK 5//////////////////////////////////////

showData(obj);
newSetOfNumbers(200, 10);
showData(obj);
newSetOfNumbers(500, 20);
showData(obj);  