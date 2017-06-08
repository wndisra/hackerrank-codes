/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records
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

function getRecord(s) {
  var highCounter = 0
  var lowCounter = 0
  var currentHighest = s[0]
  var currentLowest = s[0]

  for (var i = 0; i < s.length; i++) {
    if (s[i + 1] > currentHighest) {
      highCounter++
      currentHighest = s[i + 1]
    }

    if (s[i + 1] < currentLowest) {
      lowCounter++
      currentLowest = s[i + 1]
    }
  }

  return [highCounter, lowCounter]
}

function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);

  var result = getRecord(s);

  console.log(result.join(" "));
}
