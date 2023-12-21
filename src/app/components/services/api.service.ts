import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concat, forkJoin, interval, map, merge, of, retry, share, shareReplay, throwError, toArray, zip } from 'rxjs';

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

  getUserToArray() {
    return this.http.get(this.LOCAL + 'user')
      .pipe(
        toArray()
      )
  }

  getUsersDebounceTime(name: string) {
    return this.http.get(this.LOCAL + 'users?name=' + name);
  }

  getUserShareReplay() {
    return this.http.get(this.LOCAL + 'users')
      .pipe(
        shareReplay(1)
      );
  }

  getUserShare() {
    return this.http.get(this.LOCAL + 'users')
      .pipe(
        share()
      );
  }

  getUserCatchError() {
    return this.http.get(this.LOCAL + 'us')
      .pipe(
        catchError(error => {
          if (error.status === 0 && error.status !== 404) {
            return of('Ocorreu um erro na aplicação. Tente acessar mais tarde!')
          } else if (error.status === 404) {
            console.log(error.message);
          } else {
            return of('Ocorreu um erro no servidor, Tente mais tarde!');
          }

          return throwError(() => error);
        }),
        retry(2)
      );
  }

}
