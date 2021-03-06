import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseWorkerService<TRequest, TResponse> {
    
    protected isInit = false;
    protected worker: Worker | null;

    constructor() {}

    public setupWorker(worker: Worker) {
        this.worker = worker;
        this.worker.onmessage = (message) => {
            this.handleMessage(JSON.parse(message.data));
        };
        this.isInit = true;
    }

    public abstract postMessageToWorker(workerMessage: TRequest)

    protected abstract handleMessage(message: TResponse);
}