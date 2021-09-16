import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {map, filter} from 'rxjs/operators'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubsription: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.firstObsSubsription.unsubscribe(); // in order to prevent a memory leak, for an rxjs subscription, we must call unsubscribe
  }
  
  // Build our own observable
  ngOnInit() {
    // use an observable provided by rxjs
    this.firstObsSubsription = interval(1000).subscribe( (count) => {
      console.log(count);
    });

    // creating a custom observable
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error( 'Count is  greater than 3!')); // simulate an error - the observable will die
        }
        count++;
      }, 1000);
    });

    customIntervalObservable.pipe(
      filter( (data: number) => { return data > 0}),
        map( (data: number) => {
      return 'Round ' + (data + 1);
    })).subscribe( data => {
      console.log('custom ' + data);
    }, error => { // 2nd (optional) argument to subscribe is the error handler
      console.log(error);
    }, () => { // 3rd (optional) argument to subscribe is the completion handler
      // complete handler will not if errorhandler runs first
      console.log('Completed!');
    });
  }


}

