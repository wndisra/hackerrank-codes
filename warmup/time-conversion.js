/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/time-conversion
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
  var time = readLine();

  var hh = Number(time[0] + time[1]);
  var mm = time[3] + time[4];
  var ss = time[6] + time[7];

  var format = time[time.length - 2] + time[time.length - 1];

  if (format === 'PM' && (hh >= 1 && hh <= 11)) {
    hh += 12;
    hh.toString();
  } else if (format === 'PM' && hh === 12) {
    hh.toString()
  } else {
    if (hh < 10) {
      hh = '0' + hh.toString();
    } else if (hh === 12 && mm === '00') {
      hh = '00';
    } else {
      hh = '00'
    }
  }

  console.log(hh + ':' + mm + ':' + ss);
};
