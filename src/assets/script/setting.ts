export var gameSettings = {
	totalScratchItem:9, //total scratch item
	scratchStrokeNum:30, //scratch stroke num
	gameCredit:100, //game credit
	maximumBet:10, //maximum game bet
	currencyStr:"$", //currency
	gameTimer:120000, //game timer
	enablePercentage:true, //option to have result base on percentage
};

export var textDisplay = {
	exitMessage:"ARE YOUR SURE\nYOU WANT TO QUIT THE GAME?", //go to main page message
	resultTitleText:"YOU WON TOTAL OF", //result complete text display
}

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareText = 'SHARE THIS GAME'; //social share message
var shareTitle = 'Highscore on Jungle Scratch Game is [SCORE]PTS.';//social share score title
var shareMessage = '[SCORE]PTS is mine new highscore on Jungle Scratch Game! Try it now!'; //social share score message


export {shareEnable, shareText, shareTitle , shareMessage}