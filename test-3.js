var matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

var sum = 0;

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (i === j) {
      sum += matrix[i][j];
    }
  }
}

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (i + j === matrix.length - 1) {
      sum -= matrix[i][j];
    }
  }
}

console.log(sum);
