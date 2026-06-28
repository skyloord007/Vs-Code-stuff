// Comment: Variables to track flipping
let flipInterval = null;
let flipped = false;
// Comment: Function called when Start button is clicked
function startClicked() {
    // Comment: Disable Start button
    document.getElementById("startBtn").disabled = true;
    // Comment: Enable Stop button
    document.getElementById("stopBtn").disabled = false;
    // Comment: Update message using innerHTML
    document.getElementById("msg").innerHTML = "Join the Dance!";
    // Comment: Start flipping animation
    startFlipping();
}
// Comment: Function called when Stop button is clicked
function stopClicked() {
    // Comment: Disable Stop button
    document.getElementById("stopBtn").disabled = true;
    // Comment: Enable Start button
    document.getElementById("startBtn").disabled = false;
    // Comment: Update message using innerHTML
    document.getElementById("msg").innerHTML = "Yippee stopped.";
    // Comment: Stop flipping animation
    stopFlipping();
}
// Comment: Function that starts flipping the image
function startFlipping() {
    // Comment: Prevent multiple intervals
    if (flipInterval !== null) return;
    // Comment: Flip every 500ms
    flipInterval = setInterval(function() {
        // Comment: Toggle flip state
        flipped = !flipped;
        // Comment: Apply CSS transform to flip image
        document.getElementById("meme").style.transform =
            flipped ? "scaleX(-1)" : "scaleX(1)";
    }, 500);
}
// Comment: Function that stops flipping
function stopFlipping() {
    clearInterval(flipInterval);
    flipInterval = null;
}