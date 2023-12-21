import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements AfterViewInit {

  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click').pipe(
      skip(4),
      tap(() => console.log('Cliquei no botão =)'))
    ).subscribe();
  }

}
