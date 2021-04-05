/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matr) {
        let sum = 0
        matr.map((line, i) => {
            line.map((numb, j) => {
                if(numb === 0){
                    if(i < matr.length - 1){
                        matr[i + 1][j] = 0
                    }
                }
                sum += numb
            })
        })
        return sum
      }

module.exports = getMatrixElementsSum;
