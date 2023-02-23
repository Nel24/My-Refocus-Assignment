// let divBy3 = [];
// let divBy5 = [];
// let divBy3n5 = [];
// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     divBy3n5.push(i);
//   } else if (i % 5 === 0) {
//     divBy5.push(i);
//   } else if (i % 3 === 0) {
//     divBy3.push(i);
//   }
// }
// let multiplesOf3 = divBy3.length;
// let multiplesOf5 = divBy5.length;
// let multiplesOf3n5 = divBy3n5.length;
// console.log(`There are ${multiplesOf3} numbers divisible by 3.`);
// console.log(`There are ${multiplesOf5} numbers divisible by 5.`);
// console.log(`There are ${multiplesOf3n5} numbers divisible by 3 and 5.`);

///////////////////////////////SOLUTION 2/////////////////////////////

let multiplesCounter = 0;

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    multiplesCounter++; /// kada true yung statement nag iincrement yung variable ko , n = n+1 formula for increment
  }
}
console.log(`There are ${multiplesCounter} numbers divisible by both 3 and 5.`);
