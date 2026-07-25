// ---------------------------------------------
// Craps Game Function
// Called when the user clicks the Start Game button
// ---------------------------------------------
function playGame() {
    // Play dice sound
    const sfx = document.getElementById("diceSound");
    sfx.currentTime = 0;   // rewind so it plays every time
    sfx.play();
    // Get the player's name from the input field
    let name = document.getElementById("playerName").value;
    // Call the second required function to generate a greeting
    let greeting = greetPlayer(name);
    // Generate two random numbers between 1 and 6
    // Math.random() gives 0–0.999..., multiply by 6, then +1
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    // Add the dice together
    let sum = die1 + die2;
    // Variable to store the result message
    let resultMessage = "";

    // ---------------------------------------------
    // Craps Game Rules
    // ---------------------------------------------
    // If the sum is 7 or 11 → player loses
    if (sum === 7 || sum === 11) {
        resultMessage = "CRAPS - You lose!";
    }
    // If dice match AND are even → player wins
    else if (die1 === die2 && die1 % 2 === 0) {
        resultMessage = "You won!";
    }
    // Otherwise → push
    else {
        resultMessage = "You pushed!";
    }
    // ---------------------------------------------
    // Output results to the webpage using innerHTML
    // ---------------------------------------------
    // Play dice sound
    document.getElementById("diceSound").play();

    document.getElementById("gameOutput").innerHTML =
        `<h2>${greeting}</h2>
         <p>You rolled: ${die1} and ${die2}</p>
         <p>Sum: ${sum}</p>
         <p><strong>${resultMessage}</strong></p>`;
}

// ---------------------------------------------
// Second Required Function
// Takes a parameter and returns a greeting string
// ---------------------------------------------
function greetPlayer(name) {

    // If the user didn't type anything, use a default name
    if (name.trim() === "") {
        return "Welcome, traveler!";
    }
    // Otherwise return a personalized greeting
    return "Welcome, " + name + "!";
}