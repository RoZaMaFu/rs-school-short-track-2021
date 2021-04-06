function deleteDigit(n) {
  let maxNum = 0;
  const numArr = n.toString().split('');
  numArr.map((num, i) => {
    const tempArr = numArr;
    tempArr.splice(i, 1);
    if (Number(tempArr.join('')) > maxNum) {
      maxNum = Number(tempArr.join(''));
    }
    return num;
  });
  return maxNum;
}

module.exports = deleteDigit;

