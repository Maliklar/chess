function checkBlackHorseMove(id, type, x, y, newX, newY){
    // all possibi
    if((x+2) == newX && ((y+1) == newY || (y-1) == newY)){
        return checkLandingPosition(newX, newY);
    }
    if((x-2) == newX && ((y+1) == newY || (y-1) == newY)){
        return checkLandingPosition(newX, newY);
    }
    if((y+2) == newY && ((x+1) == newX || (x-1) == newX)){
        return checkLandingPosition(newX, newY);
    }
    if((y-2) == newY && ((x+1) == newX || (x-1) == newX)){
        return checkLandingPosition(newX, newY);
    }
    return false;
}