// Game Object 
// will have another object called chracters
// Game object will have different functions for battling
var game = {
	playerCharacter: "",
	computerCharacter: "",
	characterArray:[],

	playerChoice: function(x){
		$(x).find("img.warriorImg").detach().appendTo("#playerChoiceImage");
		console.log(x);
	},	

	computerChoice: function(){

	},

	playerAttack: function (){

	},

	computerAttack: function(){

	},

	damage: function (){

	},

	winLoss: function (){

	},

	newOpponent: function(){

	},

	reset: function (){

	}


};

function characters(characterName, characterHP, characterAttack, characterPowerLevel, characterImg){
	this.cName = characterName;
	this.cHP = characterHP;
	this.cAttack = characterAttack;
	this.cPL = characterPowerLevel;
	this.cImg = characterImg;
	this.cAttackCounter = 1;
	game.characterArray.push(this);
};

characters.protoype = {
	constructor:characters,

	powerLevelIncrease: function () {
		this.characterPowerLevel = this.cAttackCounter*this.characterPowerLevel
	},

	attackLevelIncrease: function (){
		this.cAttack = this.cAttack*(this.characterPowerLevel/1000)
	},

	hpUpdate: function(){

	},

	attackCounterUpdate: function (){

	}
};

var character1 = new characters("Goku", 120, 10, 1000);
var character2 = new characters("Krillin", 100, 8, 800);
var character3 = new characters("Android 18", 110, 9, 900);
var character4 = new characters("Vegeta", 180, 15, 1500);

$(".warriorSelection").click(function(){
	game.playerChoice(this);
	// console.log(this);
	// $(this).find(".warriorImg").detach().appendTo("#playerChoiceImage");
});