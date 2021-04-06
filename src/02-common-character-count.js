function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let commonLetters = 0;
  s1Arr.map((s1Letter) => {
    s2Arr.map((s2Letter) => {
      if (s1Letter === s2Letter) {
        s1Arr[s1Arr.indexOf(s1Letter)] = 0;
        s2Arr[s2Arr.indexOf(s2Letter)] = 0;
      }
      return s2Letter;
    });
    return s1Letter;
  });
  s1Arr.map((letter) => {
    if (letter === 0) {
      commonLetters++;
    }
    return letter;
  });
  return commonLetters;
}

module.exports = getCommonCharacterCount;
