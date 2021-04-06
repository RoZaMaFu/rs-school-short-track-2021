function sortByHeight(arr) {
  const tempArr = arr.filter((numb) => numb !== -1).sort();
  arr.map((int, i) => {
    if (int === -1) {
      tempArr.splice(i, 0, -1);
    }
    return int;
  });
  return tempArr;
}

module.exports = sortByHeight;

