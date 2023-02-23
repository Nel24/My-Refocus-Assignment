// let age = 10;
function isAgeQualified(age) {
  if (age >= 65) {
    console.log(`You get your income from your pension.`);
  } else if (age <= 65 && age >= 18) {
    console.log(`Each month you will recieve a salary`);
  } else if (age < 18) {
    console.log(`Youll get an allowance.`);
  } else {
    console.log(`The value of the age variable is not numerical`);
  }
}
isAgeQualified(67);
