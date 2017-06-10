/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/maximizing-xor
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
  __input_stdin += data;
});

/*
 * Complete the function below.
 */
function maxXor(l, r) {
  var selisih = r - l;
  var currentSelisih;
  var result = [];

  for (var i = 0; i <= selisih; i++) {
    currentSelisih = r - l + 1;

    for (var j = 0; j < currentSelisih; j++) {
      if (j === 0) {
        result.push(l ^ l);
      } else {
        result.push(l ^ (l + j));
      }
    }

    l++;
  }

  result.sort((a, b) => b - a);

  return result[0];
}

process.stdin.on('end', function() {
  __input_stdin_array = __input_stdin.split("\n");
  var res;
  var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;

  var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;

  res = maxXor(_l, _r);
  process.stdout.write("" + res);
});
