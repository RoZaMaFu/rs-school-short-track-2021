function getCommonCharacterCount(s1, s2) {
        let s1Arr = s1.split('')
        let s2Arr = s2.split('')
        let commonLetters = 0
        s1Arr.map(s1Letter => {
            s2Arr.map(s2Letter => {
                if(s1Letter === s2Letter){
                    s1Arr[s1Arr.indexOf(s1Letter)] = 0
                    s2Arr[s2Arr.indexOf(s2Letter)] = 0
                }
            })
        })
        s1Arr.map(letter => {
            if(letter === 0){
                commonLetters++
            }
        })
        return commonLetters
    }

module.exports = getCommonCharacterCount;
