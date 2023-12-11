import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {

  ngOnInit(): void {
    this.operatorMapTo();
  }

  operatorMapTo() {
    const click$ = fromEvent(document, 'click');
    const it$ = interval(1000);

    const mapTo$ = click$.pipe(mapTo('Olá mundo!'));
    const mapToIt$ = it$.pipe(mapTo('Gerou um número'));

    mapTo$.subscribe(console.log);
    mapToIt$.subscribe(console.log);
  }

}
