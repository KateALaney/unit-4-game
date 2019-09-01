$(document).ready(function(){

// Create global variables for wins, losses, and score.

var wins = 0;
var losses = 0;
var score = 0;

// Generate a random number between 19 and 120.

var scoreToBeat = Math.floor(Math.random() * 101) + 19;

// Testing random number generator.
console.log(scoreToBeat);

// Generate four random numbers between 1 and 12.

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

// Testing random number generator.
console.log(crystal1)

// Create an onclick function to set the random number.
$("#randomNumber").on("click", function () {
    $("#randomNumber").text("Click for Random Number: " + scoreToBeat);
});

// Create an onclick function for when a player selects a crystal to add to score and update the score.

$("#roseGold").on("click", function() {
    score = score + crystal1;
    $("#yourScore").text("Your Score: " + score);
    if (score === scoreToBeat) {
        win();
    } else if (score > scoreToBeat);
        loss();
    }  
);

$("#purple").on("click", function() {
    score = score + crystal2;
    $("#yourScore").text("Your Score: " + score);
    if (score === scoreToBeat) {
        win();
    } else if (score > scoreToBeat);
        loss();
    }
);

$("#clear").on("click", function() {
    score = score + crystal3;
    $("#yourScore").text("Your Score: " + score);
    if (score === scoreToBeat) {
        win();
    } else if (score > scoreToBeat);
        loss();
    }
);

$("#rainbow").on("click", function() {
    score = score + crystal4;
    $("#yourScore").text("Your Score: " + score);
    if (score === scoreToBeat) {
        win();
    } else if (score > scoreToBeat);
        loss();
    }
);

// Create a function to reset the game.  This will reset the randomly-generated numbers.

function reset () {
    score = 0;
    $("#yourScore").text("Your Score: " + score);
    scoreToBeat = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text("Click for Random Number: " + scoreToBeat);
}

// Update the win counter.

function win() {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
}

// Update the loss counter.

function loss() {
    loss++;
    $("#losses").text("Losses: " + losses);
    reset();
}

});