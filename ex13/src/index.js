// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(
    Math.random(minNumber, maxNumber) * (maxNumber - minNumber + 1) + minNumber
  );
}
console.log(randomRangeNumber(9, 35));
// Only change code above this line
module.exports = randomRangeNumber;
