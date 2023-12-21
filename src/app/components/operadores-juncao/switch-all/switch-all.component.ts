import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss']
})
export class SwitchAllComponent implements OnInit {

  ngOnInit(): void {
    this.operatorSwitchAll();
  }

  operatorSwitchAll() {
    const event$ = fromEvent(document, 'click').pipe(
      tap(() => console.log('Cliquei'))
    );

    const source = event$.pipe(
      map(() => interval(1000))
    )

    source.pipe(
      switchAll()
    ).subscribe(x => console.log(x));
  }

}
