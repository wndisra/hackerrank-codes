/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/pangrams
 */

function processData(input) {
  input = input.toLowerCase();
  var arr = [];

  for (var i = 0; i < input.length; i++) {
    if (arr.indexOf(input[i]) === -1 && input[i] !== ' ') {
      arr.push(input[i]);
    }
  }

  if (arr.length === 26) {
    console.log('pangram');
  } else {
    console.log('not pangram');
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
