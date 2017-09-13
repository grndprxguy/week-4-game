$( document ).ready(function() {
// variables
// set game number between 19-120
var gameNum = function() {return Math.ceil(Math.random() * (120 - 19) + 19);};
// function to set crystal value 1-12
var rand = function() {return Math.ceil(Math.random() * (12 - 1) + 1);};
var wins = 0;
var losses = 0;
var total = 0;
console.log(gameNum());

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
$(".container").on('click', function(){ 
	$("#totalScore").text(total += crystals.crystal1)
});	


});
