import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {

  @ViewChild('myButton') myButton!: ElementRef;

  constructor(
    private service: ApiService
  ) {}

  ngAfterViewInit(): void {
    // this.operatorSwitchMap();
    this.operatorInterval();
  }

  operatorInterval() {
    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe(console.log)
  }

  operatorSwitchMap() {
    fromEvent(this.myButton.nativeElement, 'click').pipe(
      switchMap(() => this.service.getUserSwitchMap())
    ).pipe(
      map((data: any) => data.cpf),
      switchMap(cpf => this.service.getUserSwitchMapSearch(cpf))
    ).subscribe(console.log);
  }

}
