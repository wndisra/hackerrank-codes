/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/mark-and-toys
 */

function processData(input) {
  var lines = input.split("\n");
  var prices = lines[1].split(' ').map(Number);
  var tmp = lines[0].split(' ');
  var money = Number(tmp[1]);
  var sum = 0;
  var counter = 0;

  prices.sort((a, b) => a - b);

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < money) {
      sum += prices[i];

      if (sum >= money) {
        break;
      } else {
        counter++;
      }
    }
  }

  console.log(counter);
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
