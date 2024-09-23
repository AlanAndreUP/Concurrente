let happiness = 100;

function updateHappiness() {
    happiness -= 1;
    if (happiness < 0) happiness = 0;
    postMessage(happiness);
}

setInterval(updateHappiness, 2000);

onmessage = (event) => {
    if (event.data === 'play') {
        happiness = Math.min(100, happiness + 25);  
    }
};
