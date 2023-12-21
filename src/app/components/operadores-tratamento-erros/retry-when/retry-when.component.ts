import { Component, OnInit } from '@angular/core';
import { delay, delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  ngOnInit(): void {
    this.operadorRetryWhen();
  }

  operadorRetryWhen() {
    const it$ = interval(1000);
    const sub = it$.pipe(
      map(value => {
        if (value > 5) return 'Tá dentro da condição: ' + value;

        return value;
      }),
      retryWhen(error => (
        error.pipe(
          tap(value => console.log("value: ", value)),
          delayWhen(value => timer(value * 1000))
        )
      ))
    )

    sub.subscribe(console.log)
  }

}
