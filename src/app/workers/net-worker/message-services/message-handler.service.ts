import { ManagementSystem } from "../main/management.service";

export class MessageHandler {

    private mangementSystem: ManagementSystem;

    constructor(protected worker) {

        this.mangementSystem = new ManagementSystem(this);
    }

    toClient(message) {
        this.worker.postMessage(JSON.stringify(message));
    }

    toWorker(message) {
        this.mangementSystem.handleRequest(message);
        this.mangementSystem.handleCommand(message);
    }

}
