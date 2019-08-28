$(document).ready(function(){

// Define global variables for attack increase, enemy HP loss, character HP loss, and enemy/character death.

var attackBonus = [];
var enemy = [];
var character = [];
var death = [];

// Define objects for character variables.

var aragorn = {
    hitpoints = 100,
    attack = 450,
    counter = 450,
}

var eowyn = {
    hitpoints = 100,
    attack = 200,
    counter = 150,
}

var gimli = {
    hitpoints = 100,
    attack = 300,
    counter = 350
}

var galadriel = {
    hitpoints = 100,
    attack = 600,
    counter = 150,
}

// Define an on.click function to select the character ID and move to arena.



// Define an on.click function to select the enemy ID and move to arena.

// Define an on.click function to select the "Attack" button and start the attack function.

/* Attack function:

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

// 

});