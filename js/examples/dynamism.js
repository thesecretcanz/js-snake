function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Latest update 13:01');
setTimeout(function() {
    console.log("Everything working!");
}, 5000);