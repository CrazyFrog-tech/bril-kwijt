import { Component } from '@angular/core';
import { Brillen } from '../bril-list-item/Bril';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './brillen-lijst.component.html',
  styleUrls: ['./brillen-lijst.component.css'],
})
export class brillenLijstComponent {
  brillen = Brillen;
}
