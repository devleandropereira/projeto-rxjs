import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.service.getUserShare();
    const nameSusane$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Susane Maria')))
    const nameLeandro$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Leandro Pereira')))
    const nameLucas$ = obsUser$.pipe(map((data: any) => data.filter((value: any) => value.name === 'Lucas Costa')))
    obsUser$.subscribe(console.log);
    nameSusane$.subscribe(console.log);
    nameLeandro$.subscribe(console.log);
    nameLucas$.subscribe(console.log);
  }

}
