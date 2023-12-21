import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  ngOnInit(): void {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr = from([
      {name: 'Leandro', age: 32},
      {name: 'Susane', age: 31},
      {name: 'Lucas', age: 0}
    ]);

    const names = arr.pipe(
      filter(value => value.age >= 18)
    )

    names.subscribe(console.log)
  }
}
