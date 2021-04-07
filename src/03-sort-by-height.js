function sortByHeight(arr) {
  const tempArr = arr.filter((numb) => numb !== -1).sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  arr.map((int, i) => {
    if (int === -1) {
      tempArr.splice(i, 0, -1);
    }
    return int;
  });
  return tempArr;
}

module.exports = sortByHeight;


