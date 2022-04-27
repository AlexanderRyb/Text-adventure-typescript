// currently visible node is stored here
var currentRoute = "a";
var currentDigit = 1;
var currentNode = currentRoute + "-" + currentDigit;
function showNextNodeA() {
    console.log(currentNode);
    document.getElementById(currentNode).style.display = "none";
    currentDigit++;
    currentNode = currentRoute + "-" + currentDigit;
    document.getElementById(currentNode).style.display = "flex";
}
function changeRoute(route) {
    //new route id letter and 1
    currentRoute = route;
}
//function for branching to a different route?
function gameOver(message) {
    //current node display: none
    //display game over node with passed message
}
function newGame() {
    document.getElementById(currentNode).style.display = "none";
    currentRoute = "a";
    currentDigit = 1;
    currentNode = currentRoute + "-" + currentDigit;
    document.getElementById("a-1").style.display = "flex";
}
//one function for every ending route?
