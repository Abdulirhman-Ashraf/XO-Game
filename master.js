let turn = "X";
let title = document.getElementById("title");
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
      setInterval(() => {
        title.innerHTML += ".";
      }, 1000);
      setTimeout(() => {
        location.reload();
      }, 4000);
      return;
    }
    turn = turn === "X" ? "O" : "X";
    title.innerHTML = turn;
  }
}

// Winning combinations
const winCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Main diagonal
  [2, 4, 6], // Anti-diagonal
];
function winner() {
  let parts = [];
  for (let i = 0; i < 9; i++) {
    parts[i] = document.getElementById("div" + i);
  }

  return winCombos.some((combo) => {
    let [a, b, c] = combo;
    return (
      parts[a].innerHTML != "" &&
      parts[a].innerHTML === parts[b].innerHTML &&
      parts[b].innerHTML === parts[c].innerHTML
    );
  });
}
