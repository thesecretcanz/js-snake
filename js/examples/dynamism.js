function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(5000).then(() => { console.log('World!'); });