function renameFiles(fileArr) {
    for(let i = 0; i < fileArr.length; i++){
        let counter = 0
        for(let j = i+1; j < fileArr.length; j++){
            if(fileArr[i] === fileArr[j]){
                counter++
                fileArr[j] = `${fileArr[i]}(${counter})`
            }
        }
    }
    return fileArr
}


module.exports = renameFiles;
