/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/mini-max-sum
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
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var sums = [];

  for (var i = 0; i < arr.length; i++) {
    sums.push((arr.reduce((a, b) => a + b, 0)) - arr[i])
  }

  console.log(Math.min(...sums) + ' ' + Math.max(...sums))
}
