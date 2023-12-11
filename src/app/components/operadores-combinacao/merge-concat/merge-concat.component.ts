import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent {

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.getUsersMerge();
    // this.getUsersConcat();
  }

  getUsersMerge() {
    this.service.getUsersMerge().subscribe(res => console.log(res));
  }

  getUsersConcat() {
    this.service.getUsersConcat().subscribe(res => console.log(res));
  }

}
