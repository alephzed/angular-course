import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
    activeCountClick = 0;
    inactiveCountClick = 0;

    addActiveCount() {
        this.activeCountClick += 1;
        console.log('active count clicks ' + this.activeCountClick);
    }

    addInactiveCount() {
        this.inactiveCountClick += 1;
        console.log('inactive count clicks ' + this.inactiveCountClick);
    }
}
