// Game Object 
// will have another object called chracters
// Game object will have different functions for battling
var game = {
	playerCharacter: "",
	computerCharacter: "",
	characterArray:[],

	playerChoice: function(x){
		if (this.playerCharacter ===""){
			var indexValue = $(x).find("img.warriorImg").attr("indexValue");
			this.playerCharacter = this.characterArray[indexValue];
			$(x).find("img.warriorImg").detach().appendTo("#playerChoiceImage");
		}
		else{
			this.computerChoice(x);
		}	
	},	

	computerChoice: function(x){
		if (this.computerCharacter ===""){
			var indexValue = $(x).find("img.warriorImg").attr("indexValue");
			this.computerCharacter = this.characterArray[indexValue];
			$(x).find("img.warriorImg").detach().appendTo("#computerChoiceImage");
		}
		else{
			return;
		}
	//show attack button after computer is selected.
	},

	playerAttack: function (){
		this.playerCharacter.cAttackCounter++;
		this.damage(this.playerCharacter);
		this.powerLevelIncrease(this.playerCharacter);
	},

	computerAttack: function(){
		this.damage(this.computerCharacter);
	},

	damage: function (x){
		console.log("this is damage",x.cAttack);
		//display current attack level  as damage for opposing character
		this.hpUpdate(x);
	},

	hpUpdate: function(x){
		if (x === this.playerCharacter){
			console.log("the player called me")
		}
		else if (x === this.computerCharacter){
			console.log("the computer called me")
		}
		else{
			console.log("you should not be seeing this")
		}
	},

	powerLevelIncrease: function (x) {
		x.cPL = x.cPL+1000;
		console.log("this is new PL",x.cPL);
		this.attackLevelIncrease(x);
		//write new PL on screen
	},

	attackLevelIncrease: function (x){
		console.log("this is attack before change",x.cAttack);
		console.log("this is x.CPL/100", x.cPL/100);
		x.cAttack = x.cAttack+(x.cPL/500);
		console.log("this is new attack",x.cAttack);
		//write new attack on screen
	},

	winLoss: function (){

	},

	newOpponent: function(){

	},

	setGameBoard: function(){
		for(i = 0; i < this.characterArray.length; i++){
			// var charImg = $("<img>");
			// charImg.addClass("warriorPic");
			// charImg.attr("src",this.characterArray[i].cImg);
			// charImg.attr("indexValue", i);
			// $("#warriorFlex").append(charImg);
			// console.log(this.characterArray[i].cImg);
			var $elem = $("#warriorFlex");

			$elem.append(
					$("<div>",{"class":"warriorSelection"}).append(
						$("<div>", {"class":"warriorPic"}).append(
							$("<img>",{"class":"warriorImg","src":this.characterArray[i].cImg, "indexValue": i})
						)
					).append(
					$("<div>", {"class":"warriorName"}).append(
						$("<p>",{"class":"name", text:this.characterArray[i].cName})
						)
					)
				);	
		}
	},

	reset: function (){
		this.setGameBoard();
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

// characters.protoype = {
// 	constructor:characters,

// 	powerLevelIncrease: function () {
// 		this.characterPowerLevel = this.cAttackCounter*this.characterPowerLevel
// 	},

// 	attackLevelIncrease: function (){
// 		this.cAttack = this.cAttack*(this.characterPowerLevel/1000)
// 	},
// };

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