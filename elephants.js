function checkBlackElephantMove(id, type, x, y, newX, newY){
    if(newX > x && newY > y){
        return checkPathValidityBottomRight(x, y, newX, newY);
    }
    if(newX > x && newY < y){
        return checkPathValidityBottomLeft(x, y, newX, newY);
    }
    if(newX < x && newY < y){
        return checkPathValidityTopLeft(x, y, newX, newY);
    }
    if(newX < x && newY > y){
        return checkPathValidityTopRight(x, y, newX, newY);
    }
    return false;

}




function checkNewPathObstics(startX, startY, endX, endY){
    let id = "cell-"+startX+"-"+startY;
    let cell = document.getElementById(id);
    if(cell.children.length > 0){
        return true;
    }
    return false;

}

function checkLandingPosition(x, y){
    let id = "cell-" + x + "-" + y;
    console.log(id);
    let cell = document.getElementById(id);
    if(cell.children.length == 0){
        return true;
    }
    else{
        if(cell.children[0].dataset.type[0] == "w"){
            killStoneAtPosition(cell.children[0].id);
            return true;
        }
        else{
            return false;
        }
    }
}










/*
    PATH VALIDITY CHECKS
*/

function checkPathValidityTopRight(startX, startY, endX, endY){
    for(let i = 0 ; i< 8; i++){
        startX--;
        startY++;
        
        if(startX ==endX && startY == endY){
            return checkLandingPosition(endX, endY);
        }
        if(checkNewPathObstics(startX, startY, endX, endY)){
            return false;
        }
    }
    return false;
}

function checkPathValidityTopLeft(startX, startY, endX, endY){
    for(let i = 0 ; i< 8; i++){
        startX--;
        startY--;
        
        if(startX ==endX && startY == endY){
            return checkLandingPosition(endX, endY);
        }
        if(checkNewPathObstics(startX, startY, endX, endY)){
            return false;
        }
    }
    return false;
}

function checkPathValidityBottomRight(startX, startY, endX, endY){
    for(let i = 0 ; i< 8; i++){
        startX++;
        startY++;
        
        if(startX ==endX && startY == endY){
            return checkLandingPosition(endX, endY);
        }
        if(checkNewPathObstics(startX, startY, endX, endY)){
            return false;
        }
    }
    return false;
}

function checkPathValidityBottomLeft(startX, startY, endX, endY){
    for(let i = 0 ; i< 8; i++){
        startX++;
        startY--;
        
        if(startX ==endX && startY == endY){
            return checkLandingPosition(endX, endY);
        }
        if(checkNewPathObstics(startX, startY, endX, endY)){
            return false;
        }
    }
    return false;
}