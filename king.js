function checkKingMove(id, type, x, y, newX, newY){
    if((x+1) == newX && y == newY){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((x-1) == newX && y == newY){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y+1) == newY && x == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y-1) == newY && x == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y-1) == newY && (x-1) == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y+1) == newY && (x+1) == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y-1) == newY && (x+1) == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    if((y+1) == newY && (x-1) == newX){
        return checkLandingPosition(newX, newY, type[0]);
    }
    return false;
}