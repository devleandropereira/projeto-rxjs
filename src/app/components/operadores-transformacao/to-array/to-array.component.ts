import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorToArray();
  }

  operatorToArray() {
    const obj = of({name: 'Leandro', age: 32});
    const arr  = obj.pipe(toArray());
    arr.subscribe(console.log);
    this.apiService.getUserToArray().subscribe(console.log);
  }
}
