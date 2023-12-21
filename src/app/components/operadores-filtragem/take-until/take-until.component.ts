import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  ngOnInit(): void {
    this.operatorTakeUntil();
  }

  operatorTakeUntil() {
    const it$ = interval(1000);
    const timer$ = timer(5000);
    const clickEvent$ = fromEvent(document, 'click');
    const subscription = it$.pipe(
      takeUntil(timer$)
    )


    const subscription2 = it$.pipe(
      takeUntil(clickEvent$)
    )

    // subscription.subscribe(console.log);
    subscription2.subscribe(console.log);
  }

}
