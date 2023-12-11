import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      {
        name: "Leandro Pereira",
        age: 32
      },
      {
        name: "Susane Maria",
        age: 31
      },
      {
        name: "Lucas Costa",
        age: 1
      }
    ]);

    const num$ = from([1, 2, 3, 4]);
    const numMap$ = num$.pipe(map(val => val * 2))
    const arrMap = arr$.pipe(
      map((current) => current)
    )

    arrMap.subscribe(console.log);
    numMap$.subscribe(console.log);

    this.service.getUsersHttp().subscribe(res => console.log(res));
  }

}
