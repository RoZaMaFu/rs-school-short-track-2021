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
