import { Component, Input } from '@angular/core';
import { Bril } from './Bril';

@Component({
  selector: 'app-bril-list-item',
  templateUrl: './bril-list-item.component.html',
  styleUrls: ['./bril-list-item.component.css'],
})
export class BrilListItemComponent {
  @Input() bril!: Bril;
}
