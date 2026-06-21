// Validate the form when the user submits it
function validateForm() {
    // Get the user's first name
    let first = document.getElementById("firstName").value;
    // Get the user's last name
    let last = document.getElementById("lastName").value;
    // Combine first + space + last
    let fullName = first + " " + last;
    // Get the user's zip code
    let zip = document.getElementById("zip").value;
    // Get the message area
    let msg = document.getElementById("message");
    // Clear previous messages
msg.textContent = "";
// Check first name length
if (first.length < 2) {
    msg.textContent = "First name must have at least 2 letters.";
    return false;
}
// Check last name length
if (last.length < 2) {
    msg.textContent = "Last name must have at least 2 letters.";
    return false;
}
// Check if full name is too long
if (fullName.length > 20) {
    msg.textContent = "Your full name must be 20 characters or fewer.";
    return false;
}
// Check if zip code is exactly 5 digits
if (zip.length !== 5 || isNaN(zip)) {
    msg.textContent = "Zip code must be exactly 5 digits.";
    return false;
}
// If everything is valid, show the secret message AND the image
msg.innerHTML = "Secret Message: You are a member of the Secret Club.<br><br>" +
                "<img src='Yippee.webp' alt='Yippee Image' style='width:200px; border-radius:10px;'>";

return false;
}