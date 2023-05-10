function func1 (arr) {
    function arrayLength (arr) {
        return arr.length;
    }

    return arrayLength;
}

console.log(func1([1,2,3,,4,5]));