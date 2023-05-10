function counter () {
    var count = 1;
    function add (count) {
        count++;
        return count;
    }
    return add(count);
}

// console.log(counter());
const counterVar = counter();
console.log(counterVar);