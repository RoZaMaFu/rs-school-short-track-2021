function getMatrixElementsSum(matrix) {
  let sum = 0;
  const tempMatrix = matrix;
  tempMatrix.map((line, i) => {
    line.map((numb, j) => {
      if (numb === 0) {
        if (i < tempMatrix.length - 1) {
          tempMatrix[i + 1][j] = 0;
        }
      }
      sum += numb;
      return numb;
    });
    return line;
  });
  return sum;
}

module.exports = getMatrixElementsSum;
