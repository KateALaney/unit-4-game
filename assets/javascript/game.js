$(document).ready(function(){

// Define global variables for attack increase, enemy HP loss, character HP loss, and enemy/character death.

var attackBonus = [];
var character = [];
var enemy = [];
var death = [];

// Define objects for character variables.

var aragorn =
      {
      name: "aragorn",
      ahitpoints: 100,
      aattack: 450,
      acounter: 450,
    }

var eowyn =    
    {
      name: "eowyn",
      ehitpoints: 100,
      eattack: 200,
      ecounter: 150,
    }

var gimli =
    {
      name: "gimli",
      ghitpoints: 100,
      gattack: 300,
      gcounter: 350,
    }

var galadriel =    
    {
      name: "galadriel",
      gahitpoints: 100,
      gaattack: 600,
      gacounter: 150,
    }
;

// Define an on.click function to select the attacker ID and the defender ID to move to arena.

$("#aAttack").click(function() {
  $("#aragorn").addClass("hide");
  $("#aAttack").addClass("hide");
  $("#aDefend").addClass("hide");
  $("#eowynAttack").addClass("hide");
  $("#gimliAttack").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  $("#aragornDefend").addClass("hide");
});

$("#aDefend").click(function() {
  $("#aragorn").addClass("hide");
  $("#aAttack").addClass("hide");
  $("#aDefend").addClass("hide");
  $("#eowynDefend").addClass("hide");
  $("#gimliDefend").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  $("#aragornAttack").addClass("hide");
});

$("#eAttack").click(function() {
  $("#eowyn").addClass("hide");
  $("#eAttack").addClass("hide");
  $("#eDefend").addClass("hide");
  $("#aragornAttack").addClass("hide");
  $("#gimliAttack").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  $("#eowynDefend").addClass("hide");
});

$("#eDefend").click(function() {
  $("#eowyn").addClass("hide");
  $("#eAttack").addClass("hide");
  $("#eDefend").addClass("hide");
  $("#aragornDefend").addClass("hide");
  $("#gimliDefend").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  $("#eowynAttack").addClass("hide");
});

$("#gAttack").click(function() {
  $("#gimli").addClass("hide");
  $("#gAttack").addClass("hide");
  $("#gDefend").addClass("hide");
});

$('#galadriel').click(function() {
  $('#galadriel').addClass("hide");
});

// Define an on.click function to select the "Attack" button and start the attack function.

$('#attackbtn').click(function() {
  $(this.name)

});
    

/*  

if characters.name 

Character attacks, and then counter attack
Checking to see if HP <= 0



If character attack
    return enemy HP loss
    if enemy HP < 0
    return enemy dies
    character ID disappears

    If character attack
    return character attack increases (new attack = attack + new attack)
    
    If enemy attack
    return character counter attack

    If enemy attack
    return character HP loss
    if character HP < 0
    return character dies
    game resets on character death

*/

// Restart button when character dies.
$('#restart').click(function () {
  location.reload();
});

});