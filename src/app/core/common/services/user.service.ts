import { Injectable } from "@angular/core";
import { UUID } from "angular2-uuid";
import { observable } from "mobx";
import { NetMessageTypes } from "src/app/shared/models/net-messages/net-worker-request";
import { NetWorkerService } from "src/app/shared/workers-module/services/net-worker.service";
import { UserState } from "../models/enums";
import { UserData } from "../models/models";
import { EndpointService } from "./endpoint.service";


@Injectable()
export class UserService {

    @observable userState: UserState;

    @observable userData: UserData;
    
    constructor(private endpointService: EndpointService) {
    }

}
