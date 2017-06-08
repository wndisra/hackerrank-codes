/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/migratory-birds
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
  types = readLine().split(' ');
  types = types.map(Number);

  var typesObj = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  };

  for (var i = 0; i < types.length; i++) {
    typesObj[types[i]]++;
  }

  var k = Object.keys(typesObj).reduce((a, b) => typesObj[b] > typesObj[a] ? b : a);

  console.log(k);
}
