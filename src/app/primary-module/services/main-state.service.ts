import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { observable } from "mobx";

@Injectable()
export class MainStateService {

    @observable lastUrl: string;
    @observable prevUrl: string;
    @observable currentUserGuid: string;

    constructor(private router: Router) {

        this.lastUrl = "/";
        this.prevUrl = "";
        // TODO: проверка
        router.events.subscribe(event => {
            const newUrl = (event as any)?.url;
            if (newUrl && newUrl !== this.lastUrl) {
                this.prevUrl = this.lastUrl;
                this.lastUrl = newUrl;
            }
        })

    }
}
