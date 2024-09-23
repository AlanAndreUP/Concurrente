
let energy = 100;

function updateEnergy() {
    energy -= 1;
    if (energy < 0) energy = 0;
    postMessage(energy);
}

setInterval(updateEnergy, 1500);

onmessage = (event) => {
    if (event.data === 'sleep') {
        energy = Math.min(100, energy + 30);
    }
};
