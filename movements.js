function moveStoneLogic(id, type, x, y, newX, newY) {
  // all posibilities
  let dd = document.getElementById("cell-" + newX + "-" + newY).children;
  if (type == "bs") {
    return checkBlackSolderMove(id, type, x, y, newX, newY);
  }
  if (type == "ws") {
    return checkWhiteSolderMove(id, type, x, y, newX, newY);
  }
  if(type == "be"){
      return checkBlackElephantMove(id, type, x, y, newX, newY);
  }
  if(type == "bc"){
      return checkBlackCastileMove(id, type, x, y, newX, newY);
  }
  if(type == "bh"){
      return checkBlackHorseMove(id, type, x, y, newX, newY);
  }
  return false;
}
