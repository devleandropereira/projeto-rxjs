import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {

  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value),
        switchMap((value: any) => this.apiService.getUsersDebounceTime(value))
      ).subscribe()
  }

}
