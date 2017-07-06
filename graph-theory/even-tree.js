/**
 * https://www.hackerrank.com/challenges/even-tree
 */

function processData(input) {
  const lines = input.split("\n");

  const firstLine = lines[0].split(' ').map(Number);
  const totalNodes = firstLine[0];
  const totalEdges = firstLine[1];
  const allEdges = lines.slice(1);

  let tree = [totalNodes + 1, 0];
  let treeMap = {};

  allEdges.forEach(function(element) {
    const edges = element.split(' ').map(Number);
    const parent = edges[1];
    const child = edges[0];

    tree[child] = parent;

    if (!treeMap[parent]) {
      treeMap[parent] = 1;
    }

    if (!treeMap[child]) {
      treeMap[child] = 1;
    }

    let count = treeMap[parent];
    treeMap[parent] = ++count;
  });

  let cutEdge = 0;

  for (let nodeIndex = tree.length - 1; nodeIndex > 1; nodeIndex--) {
    if (treeMap[nodeIndex] % 2 === 0) {
      let hasEven = false;

      for (let i = tree.length - 1; i > 1; i--) {
        if (tree[i] == nodeIndex) {
          let node = i;

          if (treeMap[node] % 2 == 0) {
            hasEven = true;
          }
        }
      }

      if (!hasEven) {
        cutEdge++;
        let parent = tree[nodeIndex];
        tree[nodeIndex] = 0;
        let count = treeMap[parent];
        treeMap[parent] = --count;
      }
    }
  }

  console.log(cutEdge);
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
