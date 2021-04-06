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
