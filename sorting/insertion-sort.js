/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/insertionsort1
 */

function processData(input) {
  var lines = input.split("\n");
  var arr = lines[1].split(' ');
  var last;
  var isBreak = false;

  last = arr.pop();

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > last) {
      arr[i + 1] = arr[i];
    } else if (arr[i] < last) {
      arr[i + 1] = last;
      isBreak = true;
    }

    console.log(arr.join(' '));

    if (i === 0 && !arr.includes(last)) {
      arr[i] = last;

      console.log(arr.join(' '));
    }

    if (isBreak) {
      break;
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
