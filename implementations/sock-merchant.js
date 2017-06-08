/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/sock-merchant
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
  c = readLine().split(' ');
  c = c.map(Number);

  var obj = {};
  var pair;
  var result = 0;

  for (var i = 0; i < c.length; i++) {
    if (c[i] in obj) {
      obj[c[i]]++;
    } else {
      obj[c[i]] = 1;
    }
  }

  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      pair = obj[key] / 2;
    } else {
      if (obj[key] > 2) {
        pair = (obj[key] - 1) / 2;
      } else {
        pair = 0;
      }
    }

    result += pair;
  }

  console.log(result);
}
