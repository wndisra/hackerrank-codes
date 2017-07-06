/**
 * https://www.hackerrank.com/challenges/clique
 */

function processData(input) {
  const lines = input.split("\n");
  const graphDatas = lines.slice(1);

  graphDatas.forEach(function(element) {
    const graphs = element.split(' ');
    let totalNodes = graphs[0];
    let totalEdges = graphs[1];

    let cliqueSize = Math.ceil(totalNodes * totalNodes / (totalNodes * totalNodes - 2 * totalEdges));

    while (totalEdges > exact(totalNodes, cliqueSize)) {
      cliqueSize += 1;
    }

    console.log(cliqueSize);
  });
}

function exact(n, c) {
  return (n * n - (n % c) * Math.pow(Math.ceil(n / c), 2) - (c - n % c) * Math.pow(Math.floor(n / c), 2)) / 2;
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
