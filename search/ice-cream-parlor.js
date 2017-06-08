/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/icecream-parlor
 */

function processData(input) {
  var lines = input.split("\n");
  var mIndex = 1;
  var nIndex = 2;
  var flavorCosts = [];
  var fIndex = 3;
  var sum;

  for (var i = 0; i < lines[0]; i++) {
    var indexArr = [];

    var m = Number(lines[mIndex]);
    var n = Number(lines[nIndex]);

    flavorCosts = lines[fIndex].split(' ').map(Number);

    for (var j = 0; j < flavorCosts.length; j++) {
      if (flavorCosts[j] <= m) {
        for (var k = j + 1; k < flavorCosts.length; k++) {
          if (flavorCosts[k] <= m) {
            sum = flavorCosts[j] + flavorCosts[k];

            if (sum === m) {
              indexArr.push(j + 1, k + 1);
            }
          }
        }
      }
    }

    mIndex += 3;
    nIndex += 3;
    fIndex += 3;

    console.log(indexArr.join(' '));
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
