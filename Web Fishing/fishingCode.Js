let holdStart = 0;
let holdEnd = 0;
let chosenFish;
let interval;

// Fish class
class Fish {
    constructor(name, holdTime, image) {
        this.name = name;
        this.holdTime = holdTime;
        this.image = image;
    }
}

// Fish list
let fishTypes = [
    new Fish("Minnow", 500, "Minnow.png"),
    new Fish("Bass", 1000, "Bass.png"),
    new Fish("Golden Carp", 2000, "Carp.png"),
    new Fish("Catfish", 2500, "Catfish.png"),
    new Fish("Golioth Grouper", 3000, "Grouper.png"),
    new Fish("Hammerhead Shark", 3500, "Hammerhead.png"),
    new Fish("Sunfish", 4000, "Sunfish.png"),
    new Fish("Great White Shark", 4500, "Shark.png")
];

// Start holding
function startHold() {
    chosenFish = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    holdStart = Date.now();

    document.getElementById("message").innerHTML = "";
    document.getElementById("progressFill").style.width = "0%";

    interval = setInterval(updateProgress, 50);
}

// End holding
function endHold() {
    holdEnd = Date.now();
    clearInterval(interval);
}

// Submit handler (called when the form is submitted)
function catchFish() {

    let heldTime = holdEnd - holdStart;

    if (heldTime >= chosenFish.holdTime) {
    document.getElementById("message").innerHTML =
        "You caught a <b>" + chosenFish.name + "</b>!<br>" +
        "<img src='" + chosenFish.image + "' style='width:150px; margin-top:10px;'>";
} else {
    document.getElementById("message").innerHTML =
        "The fish escaped!";
}

    document.getElementById("progressFill").style.width = "0%";

    return false; // Prevent page reload
}

// Progress bar
function updateProgress() {
    let heldTime = Date.now() - holdStart;
    let percent = (heldTime / chosenFish.holdTime) * 100;

    if (percent > 100) percent = 100;

    document.getElementById("progressFill").style.width = percent + "%";
}