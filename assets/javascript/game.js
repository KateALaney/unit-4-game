$(document).ready(function(){

// Define global variables for attack increase, enemy HP loss, character HP loss, and enemy/character death.

var attackBonus = [];
var enemy = [];
var character = [];
var death = [];

// Define objects for character variables.

var characters = [{
    name = aragorn,
    ahitpoints = 100,
    aattack = 450,
    acounter = 450,


    name = eowyn,
    ehitpoints = 100,
    eattack = 200,
    ecounter = 150,


    name = gimli,
    ghitpoints = 100,
    gattack = 300,
    gcounter = 350,


    name = galadriel,
    gahitpoints = 100,
    gaattack = 600,
    gacounter = 150,
}]

// Define an on.click function to select the character ID and move to arena.
$("#galadriel").click(function() {
    ("#galadriel").hide();
  });


// Define an on.click function to select the enemy ID and move to arena.

// Define an on.click function to select the "Attack" button and start the attack function.

  var attack = function() {
      
  }
    

/*  If character attack
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

// 

});