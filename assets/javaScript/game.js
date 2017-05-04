// Game Object 
// will have another object called chracters
// Game object will have different functions for battling
var game = {
	playerCharacter: "",
	computerCharacter: "",
	characterArray:[],

	playerChoice: function(x){
	
		// if (playerCharacter ===""){}
			$(x).find("img.warriorImg").detach().appendTo("#playerChoiceImage");
			
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

	setGameBoard: function(){
		for(i = 0; i < this.characterArray.length; i++){
			var charImg = $("<img>");

			charImg.addClass("warriorPic");

			charImg.attr("src",this.characterArray[i].cImg);

			charImg.attr("indexValue", i);

			$("#warriorFlex").append(charImg);

			console.log(this.characterArray[i].cImg);
		}
	},

	reset: function (){
		$(".warriorSelection").click(function(){
		game.playerChoice(this);
	// console.log(this);
	// $(this).find(".warriorImg").detach().appendTo("#playerChoiceImage");
		})
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

character1.cImg = "assets/images/goku.png";
character2.cImg = "assets/images/krillin.png";
character3.cImg = "assets/images/android18.png";
character4.cImg = "assets/images/Vegeta.png";

// characters.attackCounterUpdate()
game.reset();