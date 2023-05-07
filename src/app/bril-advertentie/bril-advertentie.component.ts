import { Component, Input, OnInit } from '@angular/core';
import { Bril, Brillen } from '../bril-list-item/Bril';
import { BrilIdService } from '../services/bril-id.service';

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  brillen = Brillen;
  bril!: Bril;

  constructor(private brilIdService: BrilIdService) {}

  ngOnInit(): void {
    console.log('bril Id is', this.id);
    debugger;
    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
    });
    let tempBril = this.brillen.find((obj) => obj.id === this.id);
    if (tempBril) {
      this.bril = tempBril;
    }
  }
}
