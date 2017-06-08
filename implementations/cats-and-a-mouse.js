/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/cats-and-a-mouse
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
  var q = parseInt(readLine());

  for (var a0 = 0; a0 < q; a0++) {
    var x_temp = readLine().split(' ');
    var x = parseInt(x_temp[0]);
    var y = parseInt(x_temp[1]);
    var z = parseInt(x_temp[2]);

    var xDeviation;
    var yDeviation;

    if (x > z) {
      xDeviation = x - z;
    } else {
      xDeviation = z - x;
    }

    if (y > z) {
      yDeviation = y - z;
    } else {
      yDeviation = z - y;
    }

    if (xDeviation === yDeviation) {
      console.log('Mouse C');
    } else if (xDeviation < yDeviation) {
      console.log('Cat A');
    } else {
      console.log('Cat B');
    }
  }
}
