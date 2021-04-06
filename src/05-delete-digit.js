/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
        let maxNum = 0
        let numArr = n.toString().split('')
        numArr.map((num, i) => {
            let tempArr = numArr
            tempArr.splice(i, 1)
            if(Number(tempArr.join('')) > maxNum){
                maxNum = Number(tempArr.join(''))
            }
        })
        return maxNum
    }

module.exports = deleteDigit;
