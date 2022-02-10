function moveStoneLogic(id, type, x, y, newX, newY) {
  // all posibilities
  let dd = document.getElementById("cell-" + newX + "-" + newY).children;
  if (!turn && type == "bs") {
    if(checkBlackSolderMove(id, type, x, y, newX, newY)){
        turn = true;
        return true;
    }
  }
  if (turn && type == "ws") {
    if(checkWhiteSolderMove(id, type, x, y, newX, newY)){
        turn = false;
        return true;
    }
  }
  if(type == "be" || type == "we"){
      if(turn && type == "we"){
        if(checkBlackElephantMove(id, type, x, y, newX, newY)){
            turn = false;
            return true;
        }
      }
      if(!turn && type == "be"){
          if (checkBlackElephantMove(id, type, x, y, newX, newY)) {
            turn = true;
            return true;
          }
      }
  }
  if(type == "bc" || type == "wc"){
       if(turn && type == "wc"){
            if(checkBlackCastileMove(id, type, x, y, newX, newY)){
                turn = false;
                return true;
            }
       }
        if(!turn && type == "bc"){
            if (checkBlackCastileMove(id, type, x, y, newX, newY)) {
                turn = true;
                return true;
            }
        }
  }
  if(type == "bh" || type == "wh"){
        if(turn && type == "wh"){
            if (checkBlackHorseMove(id, type, x, y, newX, newY)) {
                turn = false;
                return true;
            }
        }
        if (!turn && type == "bh") {
            if (checkBlackHorseMove(id, type, x, y, newX, newY)) {
                turn = true;
                return true;
            }
        }

  }
  if(type == "bq" || type == "wq"){
    if(turn && type == "wq"){
        if (checkBlackQueenMove(id, type, x, y, newX, newY)) {
            turn = false;
            return true;
        }
    }
    if(!turn && type == "bq"){
        if (checkBlackQueenMove(id, type, x, y, newX, newY)) {
            turn = true;
            return true;
        }
    }
  }
  if(type == "wk" || type == "bk"){
        if(turn && type == "wk"){
            if (checkKingMove(id, type, x, y, newX, newY)) {
                turn = false;
                return true;
            }
        }
        if(turn && type == "wk"){
            if (checkKingMove(id, type, x, y, newX, newY)) {
                turn = true;
                return true;
            }
        }
  }

  return false;
}
