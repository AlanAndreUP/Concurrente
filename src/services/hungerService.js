export class HungerService {
    constructor() {
        this.worker = new Worker('src/workers/hungerWorker.js');
    }

    start(callback) {
        this.worker.onmessage = (event) => callback(event.data);
    }

    feed() {
        this.worker.postMessage('feed');
    }
}
