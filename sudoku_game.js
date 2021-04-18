"use strict"

window.addEventListener("load", function() {
  document.getElementById("start_button").addEventListener("click", startSudoku);
});

function startSudoku() {
  document.getElementById("start_game").style.display = "none";
  sudokuDisplay();
}

function sudokuDisplay() {
  var gameArea = document.getElementById("game_area");
  var table = document.createElement("table");
  var tr, td;
  for(var i = 0; i < 9; i++) {
    tr = document.createElement("tr");
    for(var k = 0; k < 9; k++) {
      td = document.createElement("th");
      td.innerHTML = k + 1;
      if((k + 1) % 3 == 0 && (k + 1) != 9) {
        td.style.borderRight = "3px solid black";
      }
      if((i + 1) % 3 == 0 && (i + 1) != 9) {
        tr.style.borderBottom = "3px solid black";
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  gameArea.appendChild(table);
}
