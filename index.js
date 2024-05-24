const algorithm = require("./algorithms.js");

let PlayerHistory = [];
let OponentHistory = [];

let PlayerScore = 0;
let OponentScore = 0;

function game(player, oponent) {
    let result = {
        player: 0,
        oponent: 0,
    };

    if (player === "D" && oponent === "M") {
        result.player = 0;
        result.oponent = 10;
    } else if (player === "M" && oponent === "D") {
        result.player = 10;
        result.oponent = 0;
    } else if (player === "M" && oponent === "M") {
        result.player = 3;
        result.oponent = 3;
    } else if (player === "D" && oponent === "D") {
        result.player = 7;
        result.oponent = 7;
    }

    PlayerHistory.push(player);
    OponentHistory.push(oponent);

    return result;
}



for (let i = 0; i < 10; i++) {

    let playerChoice = algorithm.APP(PlayerHistory, OponentHistory);
    let oponentChoice = algorithm.PAV(OponentHistory, PlayerHistory);
    let wynik = game(playerChoice, oponentChoice);
    console.log(
        `Gracz: ${playerChoice}, przeciwnik: ${oponentChoice}, wynik: ${wynik.player}-${wynik.oponent}`
    );
    PlayerScore += wynik.player;
    OponentScore += wynik.oponent;
}

console.log(`Wynik: ${PlayerScore}-${OponentScore}`);
