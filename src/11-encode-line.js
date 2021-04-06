function encodeLine(str) {
    let strArr = str.split('')
    let resultArr = []
    for(let i = 0; i < strArr.length; i++){
        let counter = 1
        for(let j = i+1; j < strArr.length; j++){
            if(strArr[i] === strArr[j] && strArr[j]){
                counter++
                strArr[j] = null
            }
        }
        if(strArr[i]){
             resultArr.push(counter === 1 ? `${strArr[i]}` : `${counter}${strArr[i]}`)
        }
    }
    return resultArr.join('')
}

module.exports = encodeLine;
