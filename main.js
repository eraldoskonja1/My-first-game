//Generate Images1 from 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageScore = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageScore);

//Generate Images2 from 1 to 6.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//Function if, who is wining the game.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!";
}else {
    document.querySelector("h1").innerHTML = "DRAW!";
}

//Reload page.
function refreshPage(){
    window.location.reload();
} 