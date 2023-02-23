let targetSaving = 10000;
let currencyFormat = targetSaving.toLocaleString("en-US");
let currentSaving = 7500;
let percentageLeft = (1 - currentSaving / targetSaving) * 100;
console.log(
  `Thank you for your discipline and hardwork, Sam! You are now ${percentageLeft}% away from your goal of saving ₱${currencyFormat}.`
);
