function playGame() {
    const sfx = document.getElementById("diceSound");
    sfx.currentTime = 0;
    sfx.volume = 1.0;
    sfx.play();

    // Get the player's name from the input field
    let name = document.getElementById("playerName").value;

    // Call the second required function to generate a greeting
    let greeting = greetPlayer(name);

    // Generate two random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Add the dice together
    let sum = die1 + die2;

    // Variable to store the result message
    let resultMessage = "";

    // Craps rules
    if (sum === 7 || sum === 11) {
        resultMessage = "CRAPS - You lose!";
    }
    else if (die1 === die2 && die1 % 2 === 0) {
        resultMessage = "You won!";
    }
    else {
        resultMessage = "You pushed!";
    }

    // Output results
    document.getElementById("gameOutput").innerHTML =
        `<h2>${greeting}</h2>
         <p>You rolled: ${die1} and ${die2}</p>
         <p>Sum: ${sum}</p>
         <p><strong>${resultMessage}</strong></p>`;
}

function greetPlayer(name) {
    if (name.trim() === "") {
        return "Welcome, traveler!";
    }
    return "Welcome, " + name + "!";
}