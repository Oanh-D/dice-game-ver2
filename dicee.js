//refresh the page to play
//player 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "/images/dice" + randomNumber1 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
//player 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage2 = "/images/dice" + randomNumber2+ ".png";


document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//change h1
if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomImage1 < randomImage2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

