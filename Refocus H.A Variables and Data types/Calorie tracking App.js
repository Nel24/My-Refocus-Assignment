let cycleInHours = 30 * (1 / 60); /*conversion of mins to hour*/
let burnCalPerHalfHour = 225;
let numofCyclingDays = 15;
let totalCalLost = burnCalPerHalfHour * numofCyclingDays;
console.log(
  `Great work, Sam! After ${cycleInHours} hours of cycling every day for a week, you may lose a total of ${totalCalLost} calories.`
);
