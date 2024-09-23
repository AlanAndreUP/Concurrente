function getRandomFruitPosition() {
    return {
        x: Math.floor(Math.random() * 500),
        y: Math.floor(Math.random() * 500)
    };
}

function generateFruit() {
    const fruit = getRandomFruitPosition();
    postMessage(fruit); 
}
setInterval(() => {
    generateFruit();
}, 2000);
