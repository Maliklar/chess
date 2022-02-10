function checkBlackQueenMove(id, type, x, y, newX, newY){
    if(checkBlackCastileMove(id, type, x, y, newX, newY) || checkBlackElephantMove(id, type, x, y, newX, newY)){
        return true;
    }
    else{
        return false;
    }
}