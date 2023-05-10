function createIncrementer() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const incrementer = createIncrementer();
  incrementer(); // logs 1
  incrementer(); // logs 2
  
  let count = 10;
  incrementer(); // logs 3, not 11
  