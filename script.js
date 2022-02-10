
createBoard();
populateBoard();
let grid = [];

let currentMousex = 0;
let currentMousey = 0;
popluateLogic();

function createBoard(){
    let color = false;
    for (let i = 0; i < 8; i++) {
      color = !color;
      for (let j = 0; j < 8; j++) {
        let board = document.getElementById("board");
        // create cell
        color = !color;
        let a = document.createElement("div");
        a.setAttribute("class", "cell");
        a.setAttribute("id", `cell-${i}-${j}`);
        a.setAttribute("data-x", i);
        a.setAttribute("data-y", j);
        a.addEventListener("mouseover", (event)=>{
            currentMousex = i;
            currentMousey = j;
        });
        
        if (color) {
          a.style.backgroundColor = "rgb(70, 59,14)";
        } else {
          a.style.backgroundColor = "wheat";
        }

        board.appendChild(a);
      }
    }
}



function popluateLogic(){
    let temp = [];
    temp.push("bc");
    temp.push("bh");
    temp.push("be");
    temp.push("bq");
    temp.push("bk");
    temp.push("be");
    temp.push("bh");
    temp.push("bc");
    grid.push(temp);
    
    for(let i = 0 ; i< 6; i++){
        if(i==0){
            let t = [];
            t.push("bs");
            t.push("bs");
            t.push("bs");
            t.push("bs");
            t.push("bs");
            t.push("bs");
            t.push("bs");
            t.push("bs");
            grid.push(t);
        }
        else if(i == 5){
             let t = [];
             t.push("ws");
             t.push("ws");
             t.push("ws");
             t.push("ws");
             t.push("ws");
             t.push("ws");
             t.push("ws");
             t.push("ws");
             grid.push(t);
        }
        else{
            let t = [];
            t.push(0);
            t.push(0);
            t.push(0);
            t.push(0);
            t.push(0);
            t.push(0);
            t.push(0);
            t.push(0);
            grid.push(t);
        }
    }

    let tt = [];
    tt.push("bc");
    tt.push("bh");
    tt.push("be");
    tt.push("bq");
    tt.push("bk");
    tt.push("be");
    tt.push("bh");
    tt.push("bc");
    grid.push(tt);

}
// function clicked(type){
//     console.log(type.dataset.type);
// }

let mouseIsDown = false;
let stoneId = "";
$(document).bind("mousedown mousemove", event=>{
    // console.log(event.type);
    // console.log(mouseIsDown);
    event.preventDefault();
    if(event.type== "mousedown"){
        stoneId = event.target.id;

        if(stoneId[0] == "x"){
            mouseIsDown = true;
        }

    }
     if (mouseIsDown) {
       dragStone(stoneId);
       
     }
    
});

$(document).on("mouseup", (event) => {
  if (mouseIsDown) {
    mouseIsDown = false;
       updateStonePosition(stoneId);
  }
});


function dragStone(id){
    let stone = document.getElementById(id);
    stone.remove();
    let grid = document.getElementById("cell-"+currentMousex+"-"+currentMousey);
    grid.appendChild(stone);    
    
}

function updateStonePosition(id){
    let stone = document.getElementById(id);
    stone.remove();
    let grid = document.getElementById("cell-"+currentMousex+"-"+currentMousey);

    let check = moveStoneLogic(id, stone.dataset.type, +stone.dataset.x, +stone.dataset.y, currentMousex, currentMousey);
    if(check){
        stone.dataset.y = currentMousey;
        stone.dataset.x = currentMousex;
        grid.appendChild(stone);

    }
    else{
        let grid = document.getElementById("cell-"+stone.dataset.x+"-"+stone.dataset.y);
        grid.appendChild(stone);
    }
}




function killStoneAtPosition(id){
    let stone = document.getElementById(id);
    // console.log(stone);
    stone.remove();
}



let currentStone = "";

function move(e){
    console.log("MOVE "+e);
}
function populateBoard(){
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let cell = document.getElementById(`cell-${i}-${j}`);
        let stone = document.createElement("img");
        // stone.style.backgroundColor = "red";
        let color = "";
        let id = "x"+i + "x" + j;

        if(i == 0){
            color = "black";
            if(j == 0 || j == 7){
                stone.setAttribute("id", id);
                
                stone.setAttribute("data-type", "bc");
                stone.setAttribute("data-x", i);
                stone.setAttribute("data-y", j);
                stone.setAttribute("src", "./assets/"+color+"_cas.png");
                
            }
            if(j == 1 || j == 6){
                stone.setAttribute("id", id);
                
                stone.setAttribute("src", "./assets/" + color + "_horse.png");
                stone.setAttribute("data-type", "bh");
                stone.setAttribute("data-x", i);
                stone.setAttribute("data-y", j);
                
            }
            if(j == 2 || j == 5){
                stone.setAttribute("id", id);

                stone.setAttribute("src", "./assets/" + color + "_elf.png");
                stone.setAttribute("data-type", "be");
                stone.setAttribute("data-x", i);
                stone.setAttribute("data-y", j);

            }
            if (j == 3) {
                stone.setAttribute("id", id);

                stone.setAttribute("src", "./assets/" + color + "_queen.png");
                stone.setAttribute("data-type", "bq");
                stone.setAttribute("data-x", i);
                stone.setAttribute("data-y", j);

            }
            if (j == 4) {
                stone.setAttribute("id", id);

              stone.setAttribute("src", "./assets/" + color + "_king.png");
                stone.setAttribute("data-type", "bk");
                stone.setAttribute("data-x", i);
                stone.setAttribute("data-y", j);
            }
            cell.appendChild(stone);
        }
        if(i == 7){
            color = "white";
            if (j == 0 || j == 7) {
                stone.setAttribute("id", id);

              stone.setAttribute("data-type", "wc");
              stone.setAttribute("src", "./assets/" + color + "_cas.png");
              stone.setAttribute("data-x", i);
              stone.setAttribute("data-y", j);
            }
            if (j == 1 || j == 6) {
                stone.setAttribute("id", id);

              stone.setAttribute("src", "./assets/" + color + "_horse.png");
              stone.setAttribute("data-type", "wh");
              stone.setAttribute("data-x", i);
              stone.setAttribute("data-y", j);
            }
            if (j == 2 || j == 5) {
                stone.setAttribute("id", id);

              stone.setAttribute("src", "./assets/" + color + "_elf.png");
              stone.setAttribute("data-type", "we");
              stone.setAttribute("data-x", i);
              stone.setAttribute("data-y", j);
            }
            if (j == 3) {
                stone.setAttribute("id", id);

              stone.setAttribute("src", "./assets/" + color + "_queen.png");
              stone.setAttribute("data-type", "wq");
              stone.setAttribute("data-x", i);
              stone.setAttribute("data-y", j);
            }
            if (j == 4) {
                stone.setAttribute("id", id);

              stone.setAttribute("src", "./assets/" + color + "_king.png");
              stone.setAttribute("data-type", "wk");
              stone.setAttribute("data-x", i);
              stone.setAttribute("data-y", j);
            }
            cell.appendChild(stone);
        }

        if(i == 1){
                stone.setAttribute("id", id);

            stone.setAttribute("src", "./assets/black_sol.png");
            stone.setAttribute("data-type", "bs");
            stone.setAttribute("data-x", i);
            stone.setAttribute("data-y", j);
            cell.appendChild(stone);

        }
        if(i == 6){
                stone.setAttribute("id", id);

            stone.setAttribute("data-type", "ws");
            
            stone.setAttribute("src", "./assets/white_sol.png");
            stone.setAttribute("data-x", i);
            stone.setAttribute("data-y", j);
            cell.appendChild(stone);
        }
        
      }
    }

    

}

console.log(grid);