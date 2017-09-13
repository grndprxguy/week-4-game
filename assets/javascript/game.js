$( document ).ready(function() {
var wins = 0;
var losses = 0;

	function game(){
	// variables
	// set game number between 19-120
	var gameNum = random();
	function random() {return Math.ceil(Math.random() * (120 - 19) + 19);};
	// function to set crystal value 1-12
	var rand = function() {return Math.ceil(Math.random() * (12 - 1) + 1);};
	
	var total = 0;

	function gameover(){
		if (total == gameNum) {
		alert("Congrats, you win!");
		}
		else if (total > gameNum) {
		alert("You Lose");
		}
	}
	// set crystal values
	var crystals = {
		crystal1: rand(),
		crystal2: rand(),
		crystal3: rand(),
		crystal4: rand(),
		}
		console.log(crystals);

	// push gameNum to html
	$("#random").text(gameNum);

	// push clicked crystal to crystalValue
	$(".container").on('click',"div", function(){ 
		var crystalClick = $(this).attr('id');
		$("#totalScore").text(total += crystals[crystalClick]);
		gameover();
	});	
};
game();
});
