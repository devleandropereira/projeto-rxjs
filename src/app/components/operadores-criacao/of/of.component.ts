import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1, 2, 3, 4 ,5]);
    const string = of('Olá Mundo!');
    const multValue = of({name: 'Leandro'}, true, function showName() {return 'Leandrinho'});
    const teste = of(undefined);


    arr.subscribe(res => console.log(res));
    string.subscribe(res => console.log(res));
    multValue.subscribe(res => console.log(res));
    teste.subscribe(res => console.log(res));
  }

}
