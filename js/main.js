console.log("up and running");

var cards = [ {
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
}, 
{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
}, 
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}];


	
var gamesPlayed = 0;
var gamesWon = 0;

var cardsInPlay = [];

function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			gamesWon = gamesWon + 1;
			document.querySelector('.won').textContent = gamesWon;
		} else {
			alert("Sorry, try again.");
		}
}

function flipCard() {
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length == 2) {
		gamesPlayed = gamesPlayed + 1;
		document.querySelector('.played').textContent = gamesPlayed;
		checkForMatch();
	}
	
}

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

function resetBoard() {
	var currentBoard = document.getElementById('game-board');
	while (currentBoard.hasChildNodes()) {
		currentBoard.removeChild(currentBoard.firstChild);
	}
	createBoard();
	cardsInPlay = [];
}

var resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard);






