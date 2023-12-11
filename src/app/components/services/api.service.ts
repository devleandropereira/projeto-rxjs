import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, forkJoin, interval, map, merge, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  LOCAL = 'http://localhost:3000/';
  EXTERNAL = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(
    private http: HttpClient
  ) { }

  getUsersForkJoin(): Observable<any> {
    const http$ = forkJoin({
      apiLocal: this.http.get(this.LOCAL + 'users'),
      apiExterna: this.http.get(this.EXTERNAL)
    });
    
    return http$;
  }

  getUsersZip(): Observable<any> {
    const apiLocal$ = this.http.get(this.LOCAL + 'users');
    const apiExterna$ = this.http.get(this.EXTERNAL);
    const result$ = zip(apiLocal$, apiExterna$);
    return result$;
  }

  getUsersMerge() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get(this.LOCAL + 'users');
    const apiExterna$ = this.http.get(this.EXTERNAL);
    const result$ = merge(it$, apiLocal$, apiExterna$);
    return result$;
  }

  getUsersConcat() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get(this.LOCAL + 'users');
    const apiExterna$ = this.http.get(this.EXTERNAL);
    const result$ = concat(it$, apiLocal$, apiExterna$);
    return result$;
  }

  getUsersHttp() {
    const http$ = this.http.get(this.EXTERNAL)
    .pipe(map((data: any) => data.title))
    
    return http$;
  }

  getUserSwitchMap() {
    return this.http.get(this.LOCAL + 'user');
  }

  getUserSwitchMapSearch(cpf: string) {
    return this.http.get(this.LOCAL + 'users?cpf=' + cpf);
  }

}
