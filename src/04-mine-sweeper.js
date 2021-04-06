/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matr) {
    let resultMatr = []
    matr.map(line => {
        let tempLine = []
        line.map(field => {
            tempLine.push(0)
        })
        resultMatr.push(tempLine)
    })
    matr.map((line, i) => {
        line.map((field, j) => {
            if(field){
                try { resultMatr[i][j+1]++ } catch(e){ }
                try { resultMatr[i][j-1]++  } catch(e){ }
                try { resultMatr[i+1][j+1]++ } catch(e){ } 
                try { resultMatr[i+1][j]++ } catch(e){ } 
                try { resultMatr[i+1][j-1]++ } catch(e){ } 
                try { resultMatr[i-1][j+1]++ } catch(e){ } 
                try { resultMatr[i-1][j]++ } catch(e){ } 
                try { resultMatr[i-1][j-1]++  } catch(e){ }   
            }
        })
    })
    return resultMatr.map(line => line.filter(field => field !== '-1' && field !== NaN))
}

module.exports = minesweeper;
