function checkBlackCastileMove(id, type, x, y, newX, newY){
    if(newX > x && newY == y){
        if(checkBottomPathValidity(x, newX, newY)){
            return checkLandingPosition(newX, newY);
        }
    }
    if(newX < x && newY == y){
        if(checkTopPathValidity(x, newX, newY)){
            return checkLandingPosition(newX, newY);
        }
    }
    if(newX == x && newY > y){
        if(checkRightPathValidity(y, newY, x)){
            return checkLandingPosition(newX, newY);
        }
        
    }
    if(newX == x && newY < y){
        if(checkLeftPathValidity(y, newY, x)){
            console.log("here");
            return checkLandingPosition(newX, newY);
        }
    }
    return false;

}




function checkBottomPathValidity(startX, endX, y){
    for(let i = startX ; i < endX ; i++){
        let id = "cell-"+i+"-"+y;
        let cell = document.getElementById(id);
        if(cell.children.length > 0){
            return false;
        }
    }
    return true;
}

function checkTopPathValidity(startX, endX, y){
    for(let i = startX;  i > endX ; i--){
        let id = "cell-"+i+"-"+y;
        console.log(id);
        let cell = document.getElementById(id);
        if(cell.children.length > 0){
            return false;
        }
    }
    return true;
}

function checkRightPathValidity(startY, endY, x){
    for(let i = startY ; i < endY ; i++){
        let id = "cell-"+x+"-"+i;
        let cell = document.getElementById(id);
        if(cell.children.length > 0){
            return false;
        }
    }
    return true;
}

function checkLeftPathValidity(startY, endY, x){
    for(let i = startY;  i > endY ; i--){
        let id = "cell-"+x+"-"+i;
        console.log(id);
        let cell = document.getElementById(id);
        if(cell.children.length > 0){
            return false;
        }
    }
    return true;
}