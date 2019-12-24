// setTimeout(function() {
//     console.log("Radi");
// },2000);

// var counter = 0;
// var loop = setInterval(function() {
//     counter++;
//     console.log("Proslo je " + counter + "s");
// },1000);
// setTimeout(function() {
//     clearInterval(loop);
// },10000);

var player1 = prompt("Player 1 ");
var player2 = prompt("Player 2 ");
var round = 0; 
var score1 = 0;
var score2 = 0;

function bacanjeKockice() {
    console.clear();
    round++;
    var k1 = Math.ceil(Math.random()*6);
    var k2 = Math.ceil(Math.random()*6);

    score1 += k1;
    score2 += k2;

    console.log("*** ROUND " + round + " ***");
    console.log(player1 + " : " + k1 + " ----- " + k2 + " : " + player2);
    console.log(player1 + "(" + score1 + ")" + "     " + player2 + "(" + score2 + ")");

    if(round === 10) {
        winner();
    }
    else {
        setTimeout(bacanjeKockice, 1000);
    }
}

bacanjeKockice();

function winner() {
    if(score1 > score2) {
        console.log("Winner is " + player1);
    }
    else if(score2 > score1) {
        console.log("Winner is " + player2);
    }
    else console.log("It's draw");
}