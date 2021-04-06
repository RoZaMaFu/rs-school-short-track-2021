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
