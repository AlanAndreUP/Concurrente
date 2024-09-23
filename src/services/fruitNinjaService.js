
export class FruitNinjaService {
    constructor() {
        this.fruits = [];
        this.interval = null;
        this.worker = new Worker('src/workers/fruitWorker.js');

        this.worker.onmessage = (event) => {
            const fruit = event.data;
            if (fruit) {
                this.fruits.push(fruit);
            }
        };
    }

    start(callback) {
        this.interval = setInterval(() => {
            const fruit = { x: Math.random() * 600, y: Math.random() * 400 }; 
            callback(fruit);
        }, 1000); 
    }

    stop() {
        clearInterval(this.interval);
        this.worker.terminate(); 
    }
}
