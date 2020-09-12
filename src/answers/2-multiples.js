// Find the sum of all the multiples of 3 or 5 below 1000
// Try to implement it in the most efficient way

function sumOfMultiples(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

export default sumOfMultiples(1000);
