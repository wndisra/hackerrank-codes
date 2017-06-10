/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/marcs-cakewalk
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
  calories = readLine().split(' ');
  calories = calories.map(Number);

  calories.sort((a, b) => b - a);

  var miles = 0;

  for (var i = 0; i < calories.length; i++) {
    miles += (calories[i] * Math.pow(2, i));
  }

  console.log(miles);
}
