import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../../dao/brilI-list-item';
import { BrilService } from '../../services/bril.service';
import { Store } from 'redux';

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  bril!: BrilListItem;

  constructor(private brilIdService: BrilService) {
  }

  ngOnInit(): void {
    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
      console.log(this.id);
    });
    // let tempBril = this.brillen.find((obj) => obj.id === this.id);
    // if (tempBril) {
    //   this.bril = tempBril;
    // }
  }
}
