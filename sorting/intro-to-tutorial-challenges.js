/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/tutorial-intro
 */

function processData(input) {
  var temp = input.split("\n");
  var searched = Number(temp[0]);
  var arr = temp[2].split(' ').map(Number);
  var index;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === searched) {
      index = i;
    }
  }

  console.log(index);
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
