function showMessage (callback, data = {}) {
    const result = callback(data);
    console.log(result);
}

function addition ({num1, msg}) {
    console.log({num1, msg});
    return {num1, msg};
}

showMessage(addition, {
    num1: 1,
    num2: 2,
    msg: "Hello"
});