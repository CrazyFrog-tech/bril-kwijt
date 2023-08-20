import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../brillen-lijst/brilI-list-item';
import { BrilIdService } from '../../services/bril-id.service';
import { Store } from 'redux';

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  bril!: BrilListItem;

  constructor(private brilIdService: BrilIdService) {}

  ngOnInit(): void {
    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
    });
    // let tempBril = this.brillen.find((obj) => obj.id === this.id);
    // if (tempBril) {
    //   this.bril = tempBril;
    // }
  }
}
