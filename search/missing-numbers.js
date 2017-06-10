/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/missing-numbers
 */

function processData(input) {
  var lines = input.split("\n");
  var listA = lines[1].split(' ');
  var listB = lines[3].split(' ');
  var concateList = [listA, listB];
  var objA = {};
  var objB = {};

  for (var i = 0; i < concateList.length; i++) {
    var arr = concateList[i];

    for (var j = 0; j < arr.length; j++) {
      if (i === 0) {
        if (arr[j] in objA) {
          objA[arr[j]]++;
        } else {
          objA[arr[j]] = 1;
        }
      } else {
        if (arr[j] in objB) {
          objB[arr[j]]++;
        } else {
          objB[arr[j]] = 1;
        }
      }
    }
  }

  var strMissed = '';

  for (var key in objA) {
    if (key in objB && (objA[key] !== objB[key])) {
      strMissed += key + ' ';
    }
  }

  console.log(strMissed);
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
