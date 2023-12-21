import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {

  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const valores = of(1,2,3);
    const numeros = valores.pipe(
      startWith(0)
    )

    const messages = of('World', 'Good bye').pipe(startWith('Hello'));
    
    numeros.subscribe(console.log);
    messages.subscribe(console.log);
  }

}
