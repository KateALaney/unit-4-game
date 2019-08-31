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
      gacounter: 250,
    }
;

// Define an on.click function to select the attacker ID and the defender ID to move to arena.

// Aragorn Attack Function

$("#aAttack").click(function() {
  $("#aragorn").addClass("hide");
  $("#aAttack").addClass("hide");
  $("#aDefend").addClass("hide");
  $("#eowynAttack").addClass("hide");
  $("#gimliAttack").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  $("#aragornDefend").addClass("hide");
  document.getElementById("charcattack").innerHTML = "Counter-Attack: 450";
});

// Aragorn Defend Function

$("#aDefend").click(function() {
  $("#aragorn").addClass("hide");
  $("#aAttack").addClass("hide");
  $("#aDefend").addClass("hide");
  $("#eowynDefend").addClass("hide");
  $("#gimliDefend").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  $("#aragornAttack").addClass("hide");
  document.getElementById("encattack").innerHTML = "Counter-Attack: 450";
});

// Eowyn Attack Function

$("#eAttack").click(function() {
  $("#eowyn").addClass("hide");
  $("#eAttack").addClass("hide");
  $("#eDefend").addClass("hide");
  $("#aragornAttack").addClass("hide");
  $("#gimliAttack").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  $("#eowynDefend").addClass("hide");
  document.getElementById("charcattack").innerHTML = "Counter-Attack: 150";
});

// Eowyn Defend Function

$("#eDefend").click(function() {
  $("#eowyn").addClass("hide");
  $("#eAttack").addClass("hide");
  $("#eDefend").addClass("hide");
  $("#aragornDefend").addClass("hide");
  $("#gimliDefend").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  $("#eowynAttack").addClass("hide");
  document.getElementById("encattack").innerHTML = "Counter-Attack: 150";
});

// Gimli Attack Function

$("#gAttack").click(function() {
  $("#gimli").addClass("hide");
  $("#gAttack").addClass("hide");
  $("#gDefend").addClass("hide");
  $("#aragornAttack").addClass("hide");
  $("#eowynAttack").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  $("#gimliDefend").addClass("hide");
  document.getElementById("charcattack").innerHTML = "Counter-Attack: 350";
});

// Gimli Defend Function

$("#gDefend").click(function() {
  $("#gimli").addClass("hide");
  $("#gDefend").addClass("hide");
  $("#gAttack").addClass("hide");
  $("#aragornDefend").addClass("hide");
  $("#eowynDefend").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  $("#gimliAttack").addClass("hide");
  document.getElementById("encattack").innerHTML = "Counter-Attack: 350";
})

// Galadriel Attack Function

$("#gaAttack").click(function() {
  $("#galadriel").addClass("hide");
  $("#gaDefend").addClass("hide");
  $("#gaAttack").addClass("hide");
  $("#aragornAttack").addClass("hide");
  $("#eowynAttack").addClass("hide");
  $("#gimliAttack").addClass("hide");
  $("#galadrielDefend").addClass("hide");
  document.getElementById("charcattack").innerHTML = "Counter-Attack: 250";
});

// Galadriel Defend Function

$("#gaDefend").click(function() {
  $("#galadriel").addClass("hide");
  $("#gaDefend").addClass("hide");
  $("#gaAttack").addClass("hide");
  $("#aragornDefend").addClass("hide");
  $("#eowynDefend").addClass("hide");
  $("#gimliDefend").addClass("hide");
  $("#galadrielAttack").addClass("hide");
  document.getElementById("encattack").innerHTML = "Counter-Attack: 250";
});

// Define an on.click function to select the "Attack" button and start the attack function.

$("#attackbtn").click(function () {
  if ("#aAttack") {
    
  }
});
    console.log("This works.")

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
$("#resetbtn").click(function () {
  location.reload();
});

});