function renameFiles(names) {
  const tempNames = names;
  for (let i = 0; i < tempNames.length; i++) {
    let counter = 0;
    for (let j = i + 1; j < tempNames.length; j++) {
      if (tempNames[i] === tempNames[j]) {
        counter++;
        tempNames[j] = `${tempNames[i]}(${counter})`;
      }
    }
  }
  return tempNames;
}

module.exports = renameFiles;

