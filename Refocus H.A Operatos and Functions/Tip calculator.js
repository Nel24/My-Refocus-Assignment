function calcTip (mealCost,tipInPercent) {
    let totalTip = (mealCost * (tipInPercent/100));
    return totalTip;
}


console.log(calcTip(1000,10));