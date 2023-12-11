import { Component, OnInit } from '@angular/core';
import { concatMap, delay, mergeMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  ngOnInit(): void {
    this.operatorTimer();
  }

  operatorTimer() {
    const values = of(1, 2, 3);
    timer(3000).pipe(
      concatMap(() => values)
    ).subscribe(res => console.log(res));
  }

}
