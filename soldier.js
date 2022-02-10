

function checkBlackSolderMove(id, type, x, y, newX, newY) {
  if (x + 1 == newX) {
    if (y == newY) {
      if (
        document.getElementById("cell-" + newX + "-" + newY).children.length ==
        1
      ) {
        return false;
      }
      return true;
    } else if (y + 1 == newY || y - 1 == newY) {
      return checkForOtherStonesBlack(newX, newY);
    }
  }

  return false;
}

function checkWhiteSolderMove(id, type, x, y, newX, newY) {
  if (x - 1 == newX) {
    if (y == newY) {
      if (
        document.getElementById("cell-" + newX + "-" + newY).children.length ==
        1
      ) {
        console.log("yes");
        return false;
      }
      return true;
    } else if (y + 1 == newY || y - 1 == newY) {
      return checkForOtherStonesWhite(newX, newY);
    }
  }
  return false;
}

function checkForOtherStonesBlack(x, y) {
  if (document.getElementById("cell-" + x + "-" + y).children.length == 0) {
    return false;
  } else {
    if (
      document.getElementById("cell-" + x + "-" + y).children[0].dataset
        .type[0] == "w"
    ) {
      killStoneAtPosition(
        document.getElementById("cell-" + x + "-" + y).children[0].id
      );
      return true;
    }
    return true;
  }
}

function checkForOtherStonesWhite(x, y) {
  if (document.getElementById("cell-" + x + "-" + y).children.length == 0) {
    return false;
  } else {
    if (
      document.getElementById("cell-" + x + "-" + y).children[0].dataset
        .type[0] == "b"
    ) {
      killStoneAtPosition(
        document.getElementById("cell-" + x + "-" + y).children[0].id
      );
      return true;
    }
    return true;
  }
}
