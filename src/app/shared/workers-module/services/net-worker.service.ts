import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Subject } from 'rxjs';
import { NetMessageTypes, NetWorkerRequest, NetWorkerResponse } from '../../models/net-messages/net-worker-request';
import { BaseWorkerService } from './base-worker.service';

@Injectable({
    providedIn: 'root',
  })
export class NetWorkerService extends BaseWorkerService<NetWorkerRequest, NetWorkerResponse> {

    // TODO: subs cleaner
    private responseSubs = new Map<string, Subject<NetWorkerResponse>>();

    public postMessageToWorker(message: NetWorkerRequest): Subject<NetWorkerResponse> {
        if (!this.isInit) {
            throw("!! Worker was not inited");
        }
        const sub =  new Subject<NetWorkerResponse>(); 
        if (!message.guid) {
            message.guid = UUID.UUID();
        }
        this.responseSubs.set(message.guid, sub);
        this.worker.postMessage(message);
        return sub;
    }

    protected handleMessage(message: NetWorkerResponse) {
        const sub = this.responseSubs.get(message.guid);
        if (sub) {
            sub.next(message);
            sub.unsubscribe();
            this.responseSubs.delete(message.guid);
        } else {
            console.warn("!! Необработанный ответ:" + message);
        }
    }


}

