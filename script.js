// let textNodesRootA = [
//     "step 1",
//     "step 2",
//     "step 3"
// ]
// currently visible node is stored here 
var currentRoot = "a";
var currentDigit = 0;
var currentNode = currentRoot + "-" + currentDigit;
function showNextNodeA() {
    console.log(currentNode);
    document.getElementById(currentNode).style.display = "none";
    currentDigit++;
    currentNode = currentRoot + "-" + currentDigit;
    document.getElementById(currentNode).style.display = "flex";
}
function changeRoot(root) {
    //new root id letter and 1
    currentRoot = root;
}
//function for branching to a different root?
function gameOver(message) {
    document.getElementById(currentNode).style.display = "none";
    document.getElementById("game-over-block").style.display = "flex"
    document.getElementById('game-over-message').innerHTML = message

    //display game over node with passed message
}
function newGame() {
    document.getElementById(currentNode).style.display = "none";
    currentRoot = "a";
    currentDigit = 0;
    currentNode = currentRoot + "-" + currentDigit;
    document.getElementById("a-0").style.display = "flex";
}
//one function for every ending route?
