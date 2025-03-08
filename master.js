let turn = "X";
const title = document.getElementById("title");
let gameOver = false;

title.innerHTML = "X";
function play(id) {
  if (gameOver) return;
  let element = document.getElementById(id);
  if (element.innerHTML == "") {
    element.innerHTML = turn;
    if (winner()) {
      title.innerHTML = turn + " is winner";
      gameOver = true;
      newGame();
      return;
    }
    if (draw()) {
      newGame();
      return;
    }
    turn = turn === "X" ? "O" : "X";
    title.innerHTML = turn;
  }
}
// NewGame function
function newGame() {
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}
// Winning combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// get All Divs
function getDivs() {
  let parts = [];
  for (let i = 0; i < 9; i++) {
    parts[i] = document.getElementById("div" + i);
  }
  return parts;
}

//check winner
function winner() {
  const parts = getDivs();

  return winCombos.some(([a, b, c]) => {
    return (
      parts[a].innerHTML != "" &&
      parts[a].innerHTML === parts[b].innerHTML &&
      parts[b].innerHTML === parts[c].innerHTML
    );
  });
}

// check draw
function draw() {
  const parts = getDivs();

  return parts.every((part) => part.innerHTML !== "");
}
