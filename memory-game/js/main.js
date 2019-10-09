var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		updateScore();
	} else {
  		alert("Sorry, try again.");
	}
}
function flipCard(){
	if (cardsInPlay.length<2){
		var cardId = this.getAttribute('data-id');
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		this.setAttribute('src', cards[cardId].cardImage);
		this.setAttribute('state','flipped');
		if(cardsInPlay.length ===2 ){
			checkForMatch();
		}
	}
	else{
		alert("Please reset to play another round.")
	}
}
function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png')
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-Board').appendChild(cardElement);
	}
}
var score = 0;
function updateScore(){
	score++;
	document.getElementById('score').textContent = "Score: " + score;
}
function reset(){
	for (var i = 0; i<cards.length; i++){
//		document.querySelectorAll('img')[i].setAttribute('src','images/back.png');
//		document.querySelectorAll('img')[i].setAttribute('state','unflipped');
		var cardElement = document.querySelector('img');
    	cardElement.remove();
	}
	createBoard();
	cardsInPlay = [];
}
createBoard();
document.getElementById('reset').addEventListener('click', reset);