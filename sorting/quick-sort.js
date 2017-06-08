/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/quicksort1
 */

function processData(input) {
  var lines = input.split("\n");
  var arr = lines[1].split(' ').map(Number);

  var lefts = [];
  var rights = [];
  var p = arr[0];
  var equals = [p];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] >= p) {
      rights.push(arr[i]);
    } else if (arr[i] < p) {
      lefts.push(arr[i]);
    }
  }

  console.log(lefts.join(' ') + ' ' + equals.join(' ') + ' ' + rights.join(' '));
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
