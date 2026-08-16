// Function runs when user clicks the button
function checkPalindrome() {

    // Get the user's input
    let text = document.getElementById("userInput").value;

    // Remove spaces and convert to lowercase
    let cleaned = text.replace(/\s+/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversed = "";

    // Loop through characters backwards
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    // Compare original cleaned string to reversed version
    if (cleaned === reversed) {
        document.getElementById("result").innerHTML =
            "<span style='color: green; font-weight: bold;'>This IS a palindrome!</span>";
    } else {
        document.getElementById("result").innerHTML =
            "<span style='color: red; font-weight: bold;'>This is NOT a palindrome.</span>";
    }
}