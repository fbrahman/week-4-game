// Game Object 
// will have another object called chracters
// Game object will have different functions for battling
var game = {
    playerCharacter: undefined,
    computerCharacter: undefined,
    characterArray: [],
    opponentsDefeated: 0,

    playerChoice: function(x) {
        if (this.playerCharacter === undefined) {
            var indexValue = $(x).find("img.warriorImg").attr("indexValue");
            this.playerCharacter = $.extend(true, {}, (this.characterArray[indexValue]));
            $(x).find("img.warriorImg").slideUp(function() {
                $(x).find("img.warriorImg").detach().hide().appendTo("#playerChoiceImage").slideDown("slow");

                $("#warriorHeading").text("Choose your opponent!");

                $("#pHP").text(game.playerCharacter.cHP);
                $("#pPL").text(game.playerCharacter.cPL);
                $('#pAP').text(game.playerCharacter.cAttack);

            });
        } else {
            this.computerChoice(x);
        }
    },

    computerChoice: function(x) {
        if (this.computerCharacter === undefined) {

            if ($("#computerChoiceImage").children().length < 1) {

                $("#warriorHeading").text("Press the attack button to attack!")

                var indexValue = $(x).find("img.warriorImg").attr("indexValue");
                this.computerCharacter = $.extend(true, {}, (this.characterArray[indexValue]));
                $(x).find("img.warriorImg").slideUp(function() {
                    $(x).find("img.warriorImg").detach().hide().appendTo("#computerChoiceImage").slideDown();
                });

                $("#cHP").text(game.computerCharacter.cHP);
                $("#cPL").text(game.computerCharacter.cPL);
                $('#cAP').text(game.computerCharacter.cAttack);

                $("#attack").attr("disabled", false);

            } else {

                if ($(x).children(".warriorPic").children().length > 0) {
                    $("#computerChoiceImage").children("img.warriorImg").slideUp(function() {
                        $("#computerChoiceImage").children("img.warriorImg").detach()
                    });

                    var indexValue = $(x).find("img.warriorImg").attr("indexValue");
                    this.computerCharacter = $.extend(true, {}, (this.characterArray[indexValue]))
                    console.log("this is the new computer choice", this.computerCharacter);
                    $(x).find("img.warriorImg").slideUp(function() {
                        $(x).find("img.warriorImg").detach().hide().appendTo("#computerChoiceImage").slideDown();
                    });

                    $("#cHP").text(game.computerCharacter.cHP);
                    $("#cPL").text(game.computerCharacter.cPL);
                    $('#cAP').text(game.computerCharacter.cAttack);

                    $("#warriorHeading").text("Press the attack button to attack!")
                    $("#attack").attr("disabled", false);

                } else {
                    console.log(x);
                }
            }
        } else {
            console.log(x);
            console.log($(x).children(".warriorPic").children().length);
        }
        //show attack button after computer is selected.
    },

    playerAttack: function() {
        this.playerCharacter.cAttackCounter++;
        this.damage(this.playerCharacter);
        this.powerLevelIncrease(this.playerCharacter);
        this.computerAttack();
    },

    computerAttack: function() {
        this.damage(this.computerCharacter);
    },

    damage: function(x) {
        var damage = x.cAttack;
        console.log("this is damage", x.cAttack);
        //display current attack level  as damage for opposing character

        if (x === this.playerCharacter) {
            $("#computerFightingArea").text("-" + damage).hide().fadeIn().delay(600).fadeOut("slow");
        } else if (x === this.computerCharacter) {
            $("#playerFightingArea").text("-" + damage).hide().fadeIn().delay(600).fadeOut("slow");
        } else {
            console.log("damage if/else: You should not be seeing this");
        }

        this.hpUpdate(x, damage);

    },

    hpUpdate: function(x, damage) {
        if (x === this.playerCharacter) {
            console.log("the player called me")
            console.log("Computer health before update", this.computerCharacter.cHP);
            this.computerCharacter.cHP -= damage;
            $("#cHP").text(game.computerCharacter.cHP);
            console.log("Computer health after update", this.computerCharacter.cHP);
        } else if (x === this.computerCharacter) {
            console.log("the computer called me");
            console.log("Player health before update", this.playerCharacter.cHP);
            this.playerCharacter.cHP -= damage;
            $("#pHP").text(game.playerCharacter.cHP);
            console.log("Player health after update", this.playerCharacter.cHP);
        } else {
            console.log("you should not be seeing this")
        }
        this.winLoss();
    },

    powerLevelIncrease: function(x) {
        console.log("this is the old PL", x.cPL);
        x.cPL = x.cPL + 1000;
        $("#pPL").text(game.playerCharacter.cPL);
        console.log("this is new PL", x.cPL);
        if (game.playerCharacter.cPL > 9000) {
            $("#warriorHeading").text("It's OVER 9000!!!!!");
        }
        this.attackLevelIncrease(x);
        //write new PL on screen
    },

    attackLevelIncrease: function(x) {
        console.log("this is attack before change", x.cAttack);
        console.log("this is x.CPL/650", x.cPL / 650);
        x.cAttack = Math.round(x.cAttack + (x.cPL / 650));
        $('#pAP').text(game.playerCharacter.cAttack);
        console.log("this is new attack", x.cAttack);
        //write new attack on screen

    },

    winLoss: function() {
        if (this.playerCharacter.cHP > 0) {
            console.log("player is still alive")
        } else {
            console.log("the player has died")
            $("#attack").attr("disabled", true);
            $("#warriorHeading").text("You have lost! Press the reset button to try again!")
        };

        if (this.computerCharacter.cHP > 0) {
            console.log("Computer is still alive")
        } else {
            console.log("the computer has died")
            $("#attack").attr("disabled", true);
            this.newOpponent();
            this.opponentsDefeated++;
            if (this.opponentsDefeated < 3) {
                $("#warriorHeading").text("You have defeated your opponent. Choose your next opponent wisely!")
            } else {
                $("#warriorHeading").text("You have survived. For now... Press reset to start again")
            }
        };
    },

    newOpponent: function() {
        //show text choose a new opponent
        this.computerCharacter = undefined;

    },

    setGameBoard: function() {
        for (i = 0; i < this.characterArray.length; i++) {

            var $elem = $("#warriorFlex");

            $elem.append(
                $("<div>", { "class": "warriorSelection" }).append(
                    $("<div>", { "class": "warriorName element" }).append(
                        $("<p>", { "class": "name", text: this.characterArray[i].cName })
                    )
                ).append(
                    $("<div>", { "class": "warriorPic element" }).append(
                        $("<img>", { "class": "warriorImg", "src": this.characterArray[i].cImg, "indexValue": i })
                    )
                ).append(
                    $("<div>", { "class": "element warriorHP" + i }).append(
                        $("<p>", { "class": "hp", text: "Health Points: " + this.characterArray[i].cHP })
                    )
                ).append(
                    $("<div>", { "class": "element warriorPL" + i }).append(
                        $("<p>", { "class": "pl", text: "Power Level:     " + this.characterArray[i].cPL })
                    )
                ).append(
                    $("<div>", { "class": "element warriorAtt" + i }).append(
                        $("<p>", { "class": "att", text: "Attack Power:    " + this.characterArray[i].cAttack })
                    )
                )
            );
        }
    },

    reset: function() {
        this.playerCharacter = undefined;
        this.computerCharacter = undefined;
        this.opponentsDefeated = 0;
        $("#warriorFlex").empty();
        $("#playerChoiceImage").empty();
        $("#computerChoiceImage").empty();
        $("#pHP").empty();
        $("#pPL").empty();
        $('#pAP').empty();
        $("#cHP").empty();
        $("#cPL").empty();
        $('#cAP').empty();
        $("#playerFightingArea").empty();
        $("#computerFightingArea").empty();

        $("#warriorHeading").text("Click an image to choose your warrior. Choose wisely!");
        $("#attack").attr("disabled", true);

        this.setGameBoard();

        $(".warriorSelection").click(function() {
            game.playerChoice(this);
            // console.log(this);
            // $(this).find(".warriorImg").detach().appendTo("#playerChoiceImage");
        })


        $("#attack").off().click(function() {

            game.playerAttack();
        })


        $("#reset").off().click(function() {
            game.reset();
        })
    }

};

function characters(characterName, characterHP, characterAttack, characterPowerLevel, characterImg) {
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
