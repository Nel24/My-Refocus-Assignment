function OxySaturationChecker(oxygenLevel) {
  if (oxygenLevel >= 95) {
    console.log(`Normal Reading.`);
    // alert(`Normal Reading`);
  } else if (oxygenLevel === 95) {
    console.log(`Acceptable to continue home monitoring.`);
  } else if (oxygenLevel >= 92 && oxygenLevel <= 95) {
    console.log(`Seek advice from Health Profesionals.`);
  } else {
    console.log(`Seek urgent medical advice.`);
  }
  pulseRateChecker(101);
}
OxySaturationChecker(92);

function pulseRateChecker(beatsPerMinute) {
  if (beatsPerMinute >= 40 && beatsPerMinute < 100) {
    console.log(`Normal reading.`);
  } else if (beatsPerMinute >= 101 && beatsPerMinute <= 109) {
    console.log(`Acceptable to continue home monitoring.`);
  } else if (beatsPerMinute >= 110 && beatsPerMinute <= 130) {
    console.log(`Seek advice from Health professionals.`);
  } else {
    console.log(`Seek urgent medical advice.`);
  }
}
