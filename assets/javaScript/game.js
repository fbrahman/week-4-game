// Game Object 
// will have another object called chracters
// Game object will have different functions for battling
function characters(characterName, characterHP, characterAttack, characterPowerLevel, characterImg){
	this.cName = characterName;
	this.cHP = characterHP;
	this.cAttack = characterAttack;
	this.cPL = characterPowerLevel;
	this.cImg = characterImg;
	this.cAttackCounter = 1;
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

var goku = new characters("Goku", 120, 10, 1000);
var krillin = new characters("Krillin", 100, 8, 800);
var piccolo = new characters("Piccolo", 110, 9, 900);
var vegeta = new characters("Vegeta", 180, 15, 1500);

$("#warriorOne").click(function(){
	$("#warriorOnePic").detach().appendTo("#rightPane");
});

var game = {
	playerCharacter: "",
	computerCharacter: "",
	characterArray:[],

	playerChoice: function(){

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


}