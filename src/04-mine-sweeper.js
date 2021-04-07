function minesweeper(matr) {
  const resultMatr = [];
  matr.map((line) => {
    const tempLine = [];
    line.map((field) => {
      tempLine.push(0);
      return field;
    });
    resultMatr.push(tempLine);
    return line;
  });
  matr.map((line, i) => {
    line.map((field, j) => {
      if (field) {
        try { resultMatr[i][j + 1]++; } catch (e) { console.log(e); }
        try { resultMatr[i][j - 1]++; } catch (e) { console.log(e); }
        try { resultMatr[i + 1][j + 1]++; } catch (e) { console.log(e); }
        try { resultMatr[i + 1][j]++; } catch (e) { console.log(e); }
        try { resultMatr[i + 1][j - 1]++; } catch (e) { console.log(e); }
        try { resultMatr[i - 1][j + 1]++; } catch (e) { console.log(e); }
        try { resultMatr[i - 1][j]++; } catch (e) { console.log(e); }
        try { resultMatr[i - 1][j - 1]++; } catch (e) { console.log(e); }
      }
      return field;
    });
    return line;
  });
  return resultMatr.map((line) => line.filter((field) => field !== '-1' && !Number.isNaN(field)));
}
module.exports = minesweeper;

