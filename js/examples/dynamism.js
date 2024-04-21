function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function execute() {
    document.getElementById("text").innerHTML = "Hello!";
    console.log("Done!");
}

sleep(5000).then(() => { execute(); });