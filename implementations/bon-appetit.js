/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/bon-appetit
 */

function processData(input) {
  var arr = input.split("\n");
  var sum = 0;
  var result;

  var firstArr = arr[0].split(' ').map(Number);
  var secondArr = arr[1].split(' ').map(Number);
  var bill = Number(arr[2]);

  for (var i = 0; i < secondArr.length; i++) {
    if (i !== firstArr[1]) {
      sum += secondArr[i];
    }
  }

  if (bill > sum / 2) {
    result = bill - (sum / 2);
  } else {
    result = 'Bon Appetit';
  }

  console.log(result);
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
