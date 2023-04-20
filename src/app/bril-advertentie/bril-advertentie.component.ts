import { Component, Input, OnInit } from '@angular/core';
import { Bril, Brillen } from '../bril-list-item/Bril';

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css']
})
export class BrilAdvertentieComponent implements OnInit {
  @Input() id!: string;
  brillen = Brillen;
  bril!: Bril;

  ngOnInit(): void {
    let tempBril = this.brillen.find(obj => obj.id === this.id);
    if (tempBril) {
      this.bril = tempBril;
    }
  }

}
