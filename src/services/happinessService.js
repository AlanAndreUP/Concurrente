export class HappinessService {
    constructor() {
        this.worker = new Worker('src/workers/happinessWorker.js');
    }

    start(callback) {
        this.worker.onmessage = (event) => callback(event.data);
    }

    play() {
        this.worker.postMessage('play');
    }
}
