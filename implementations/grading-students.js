/**
 * Wanda Ichsanul Isra
 * https://www.hackerrank.com/challenges/grading
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

function solve(grades) {
  var finalGrades = [];
  var deviation;

  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 === 1) {
        deviation = 4;
      } else if (grades[i] % 5 === 2) {
        deviation = 3;
      } else if (grades[i] % 5 === 3) {
        deviation = 2;
      } else if (grades[i] % 5 === 4) {
        deviation = 1;
      } else {
        deviation = 0;
      }

      if (deviation < 3) {
        finalGrades.push(grades[i] + deviation);
      } else {
        finalGrades.push(grades[i]);
      }
    } else {
      finalGrades.push(grades[i]);
    }
  }

  return finalGrades;
}

function main() {
  var n = parseInt(readLine());
  var grades = [];

  for (var grades_i = 0; grades_i < n; grades_i++) {
    grades[grades_i] = parseInt(readLine());
  }

  var result = solve(grades);

  console.log(result.join("\n"));
}
