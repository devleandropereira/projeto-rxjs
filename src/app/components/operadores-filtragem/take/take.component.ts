import { Component, OnInit } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arr = from([
      {name: 'Leandro', age: 32},
      {name: 'Susane', age: 31},
      {name: 'Lucas', age: 0}
    ]);

    const it$ = interval(1000);

    const names = arr.pipe(
      map(data => data.name),
      take(2)
    )

    const limit = it$.pipe(take(5));

    // names.subscribe(console.log);
    limit.subscribe(console.log);
  }

}
