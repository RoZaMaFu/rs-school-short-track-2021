/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let tempArr = arr.filter(numb => numb !== -1).sort()
    let increment = 0
    return arr.map(numb => {
        if(numb !== -1){
            numb = tempArr[increment]
            increment++
        }
        return numb
    })
  }

module.exports = sortByHeight;
