/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/mars-exploration
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
  var S = readLine();
  var str;
  var counter = 0;

  for (var i = 0; i < S.length; i += 3) {
    if (S[i] !== 'S') {
      counter++;
    }

    if (S[i + 1] !== 'O') {
      counter++;
    }

    if (S[i + 2] !== 'S') {
      counter++;
    }
  }

  console.log(counter);
}
