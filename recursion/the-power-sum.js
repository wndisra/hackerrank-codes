/**
 * https://www.hackerrank.com/challenges/the-power-sum
 */

function processData(input) {
  const lines = input.split("\n").map(Number);
  const x = lines[0];
  const n = lines[1];

  console.log(findPowerSum(x, n, 1, 0));
}

function findPowerSum(x, n, num, sum) {
  if (sum == x) {
    return 1;
  } else {
    let totalWays = 0;

    if (sum < x) {
      for (let i = num; i <= Math.pow(x, 1.0 / n); i++) {
        totalWays += findPowerSum(x, n, i + 1, sum + Math.pow(i, n));
      }
    }

    return totalWays;
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
