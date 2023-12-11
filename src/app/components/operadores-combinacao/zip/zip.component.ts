import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.getUsersZip();
  }

  getUsersZip() {
    this.service.getUsersZip().subscribe(res => console.log(res));
  }

}
