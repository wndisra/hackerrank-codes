/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/plus-minus
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);

  var posCounter = 0;
  var negCounter = 0;
  var zerCounter = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zerCounter++;
    } else if (arr[i] < 0) {
      negCounter++;
    } else {
      posCounter++;
    }
  }

  console.log((posCounter / n).toFixed(6));
  console.log((negCounter / n).toFixed(6));
  console.log((zerCounter / n).toFixed(6));
}
