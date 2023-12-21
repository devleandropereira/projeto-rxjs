import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  ngOnInit(): void {
    this.operatorCombineLatest();
  }

  operatorCombineLatest() {
    const obj1$ = interval(1000).pipe(take(4));
    const obj2$ = of(5,6,7,8);
    const obj3$ = interval(1000).pipe(take(4));
    const combine = combineLatest([
      obj1$,
      obj2$,
      obj3$
    ])
    combine.subscribe(console.log);
  }

}
