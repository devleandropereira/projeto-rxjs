import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin() {
    // const http$ = forkJoin({
    //   apiLocal: ajax.getJSON('http://localhost:3000/users'),
    //   apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    // });

    // const httpMult$ = forkJoin({
    //   first: of(1, 2, 3),
    //   second: timer(1000),
    //   // error: throwError('Deu ruim'),
    //   pro: Promise.resolve(10)
    // })

    // http$.subscribe(res => console.log(res));
    // httpMult$.subscribe(res => console.log(res));
  }

  getUsers() {
    this.service.getUsersForkJoin().subscribe(res => {
      console.log(res);
    });
  }

}
