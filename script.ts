let gameOverMessages: string[] = [
  '"You have been devoured by a sphinx."',
  "Spinx doesn't let you ",
  "You get devoured by the spinx",
  '"No." The monster kills you',
  "Spinx sighs with disappointment and kills you.",
  "You drown",
  "The troll bites your head off.",
  '"No." Goblin bites your head off.',
  '"That\'s too bad"',
];
// currently visible node is stored here
let currentRoute = "a";
let currentDigit = 1;
let currentNode: string = currentRoute + "-" + currentDigit;

function showNextNodeA() {
  console.log(currentNode);
  document.getElementById(currentNode).style.display = "none";
  currentDigit++;
  currentNode = currentRoute + "-" + currentDigit;
  document.getElementById(currentNode).style.display = "flex";
}
function gameOver(message) {
  //display game over node with passed message
  document.getElementById(currentNode).style.display = "none";
  document.getElementById("game-over-block").style.display = "flex";
  document.getElementById("game-over-message").innerHTML =
    gameOverMessages[message];
}
function newGame() {
  document.getElementById(currentNode).style.display = "none";
  document.getElementById("game-over-block").style.display = "none";
  currentRoute = "a";
  currentDigit = 1;
  currentNode = currentRoute + "-" + currentDigit;

  document.getElementById("a-1").style.display = "flex";
}

//one function for every ending route?
