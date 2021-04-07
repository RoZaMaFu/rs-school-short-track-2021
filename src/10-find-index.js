function findIndex(array, value) {
  let index = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}

module.exports = findIndex;
