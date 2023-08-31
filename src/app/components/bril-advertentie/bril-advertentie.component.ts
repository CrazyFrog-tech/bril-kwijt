import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../../dao/brilI-list-item';
import { BrilService } from '../../services/bril.service';
import { Store } from 'redux';
import { FakeBril } from 'src/app/dao/fakebril';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  bril!: FakeBril;

  constructor(private brilIdService: BrilService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
      console.log(this.id);
      this.apiService.getBril(this.id).subscribe((data)=>{
        this.bril = data;
      })
    });
    // let tempBril = this.brillen.find((obj) => obj.id === this.id);
    // if (tempBril) {
    //   this.bril = tempBril;
    // }
  }
}
