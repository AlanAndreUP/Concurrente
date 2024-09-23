export class EnergyService {
    constructor() {
        this.worker = new Worker('src/workers/energyWorker.js');
    }

    start(callback) {
        this.worker.onmessage = (event) => callback(event.data);
    }

    sleep() {
        this.worker.postMessage('sleep');
    }
}
