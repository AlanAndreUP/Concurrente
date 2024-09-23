let hunger = 100;

function updateHunger() {
    hunger -= 1;
    if (hunger < 0) hunger = 0;
    postMessage(hunger);
}

setInterval(updateHunger, 1000);

onmessage = (event) => {
    if (event.data === 'feed') {
        hunger = Math.min(100, hunger + 20); 
    }
};
