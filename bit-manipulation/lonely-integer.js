/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/lonely-integer
 */

function processData(input) {
  var lines = input.split("\n");
  var numbers = lines[1].split(' ').map(Number);
  var numsObj = {};
  var lonelyInt;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] in numsObj) {
      numsObj[numbers[i]]++;
    } else {
      numsObj[numbers[i]] = 1;
    }
  }

  for (var key in numsObj) {
    if (numsObj[key] < 2) {
      lonelyInt = key;
    }
  }

  console.log(lonelyInt);
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
