import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.operatorCatchError();
  }

  operatorCatchError() {
    this.service.getUserCatchError().subscribe(console.log);
  }

}
