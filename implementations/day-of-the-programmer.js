/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/day-of-the-programmer
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

function solve(year) {
  var date;

  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      date = '12.09.' + year.toString();
    } else {
      date = '13.09.' + year.toString();
    }
  } else if (year === 1918) {
    date = '26.09.' + year.toString();
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 > 0)) {
      date = '12.09.' + year.toString();
    } else {
      date = '13.09.' + year.toString();
    }
  }

  return date;
}

function main() {
  var year = parseInt(readLine());
  var result = solve(year);

  process.stdout.write("" + result + "\n");
}
