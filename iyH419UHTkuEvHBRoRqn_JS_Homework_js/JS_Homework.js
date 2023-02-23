let first_Name = "Ronnel";
let last_Name = "Abundo";
const birth_Year = 1999;
let current_Year = new Date().getFullYear();
current_Year -= 1;
let birth_month = 10; // this return november month
const current_month = new Date().getMonth();

const msg = `Hello, ${first_Name} ${last_Name}! how can we help you today?`;

console.log(msg);
let age = current_Year - birth_Year;

if (birth_month <= current_month) {
  age++;
  console.log(`Patient's age: ${age}`);
} else {
  console.log(`Patient's age: ${age}`);
}
