function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Latest update 13:04');
sleep(5000).then(() => { console.log("Everything is working!"); });