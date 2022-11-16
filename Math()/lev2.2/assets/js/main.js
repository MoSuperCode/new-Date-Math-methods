let guess = Number(prompt("Gib eine Zahl von 1-10 ein!"));
console.log(guess);
function randomNumber() {
    let computerGuess = Math.round(Math.random() * 10);
    console.log(computerGuess);

    let difference = Math.abs(guess - computerGuess);
    compare(computerGuess, difference);
}

if (guess) {
    randomNumber();
};
function compare(computerGuess, difference) {
    let winner;

    if (guess == computerGuess) {
        winner = true;
        console.log("alles richtig mein SOHN");
    } else if (guess < computerGuess) {
        winner = false;
        console.log("Dir haben noch " + difference + " gefehlt");
    } else if (guess > computerGuess) {
        winner = false;
        console.log("du warst mit " + difference + " zu viel");
    }

    view(winner, difference);

}

function view(winner, difference) {
    let text;
    console.log(winner);
    const h2 = document.createElement("h2");
    document.body.appendChild(h2);
    if (winner === true) {
        text = "Richtig geraten, min-Jung!";
    } else if (winner === false) {
        text = `Leider um ${difference} daneben <br><br> Check die Console ab`;
    }


    h2.innerHTML = text;


}


