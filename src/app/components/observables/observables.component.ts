import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Leandro');
      subscriber.next(true);
      subscriber.next({name: 'Leandro'});
      subscriber.complete();
    });
    
    const it = interval(1000);

    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
      error: (err: any) => console.error('Observer error ' + err),
      complete: () => console.log('Observer complete')
    }

    const subscription1 = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe()
    }, 3000);

    subscription1.unsubscribe();
  }

}
