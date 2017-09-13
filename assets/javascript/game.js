var wins = 0;
var losses = 0;
var total = 0;

$(document).ready(function() {
	// set game number between 19-120
	var gameNum = random();
	function random() {return Math.ceil(Math.random() * (120 - 19) + 19);};
	// function to set crystal value 1-12
	function rand() {return Math.ceil(Math.random() * (12 - 1) + 1);};
	// set crystal values
	var crystals = {
		crystal1: rand(),
		crystal2: rand(),
		crystal3: rand(),
		crystal4: rand(),
		}

	// gameover logic
	function gameover(){
		if (total == gameNum) {
		wins++;	
		alert("Congrats, you win!");
		$("#winCount").text("Wins: "+wins);
		total = 0;
		reset();
		}
		if (total > gameNum) {
		losses++;
		alert("You Lose");
		$("#loseCount").text("Losses: "+losses);
		total = 0;
		reset();
		}
	}

	// reset total, generate new number
	function reset() {
		total = 0;
		random();
		$("#random").text(gameNum);
	}

	$("#random").text(gameNum);
	// push clicked crystal to crystalValue
	$(".container").on('click',"div", function(){ 
		var crystalClick = $(this).attr('id');
		$("#totalScore").text(total += crystals[crystalClick]);
		console.log(total);
		gameover();
	});	
});
