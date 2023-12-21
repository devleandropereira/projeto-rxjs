import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr = from([
      {
        name: 'Leandro', age: 32, job: {title: 'Developer', since: '11/12/2023'}
      },
      {
        name: 'Susane', age: 31
      },
      {
        name: 'Lucas', age: 0
      }
    ]);

    const names = arr.pipe(
      pluck('job', 'title')
    )

    names.subscribe(console.log);
  }
}
