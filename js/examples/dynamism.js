loop = true;

function starStopLoop() {
    loop = !loop;
}

// Main loop
while (true) {

    // Nested loop
    while (loop) {
        document.getElementById("text").innerHTML = loop;
    }
}