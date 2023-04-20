import { Component } from '@angular/core';
import { Brillen } from '../bril-list-item/Bril';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './gevonden-brillen.component.html',
  styleUrls: ['./gevonden-brillen.component.css'],
})
export class GevondenBrillenComponent {
  brillen = Brillen;
}
