const square = require('./square');

function squareSum(numbers) {
  return numbers.reduce((r, n) => r + square(n));
}

module.exports = squareSum;