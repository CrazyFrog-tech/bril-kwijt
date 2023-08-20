import { Component, Input } from '@angular/core';
import { BrilListItem } from '../brillen-lijst/brilI-list-item';
import { Router } from '@angular/router';
import { BrilIdService } from '../../services/bril-id.service';
@Component({
  selector: 'app-bril-list-item',
  templateUrl: './bril-list-item.component.html',
  styleUrls: ['./bril-list-item.component.css'],
})
export class BrilListItemComponent {
  @Input() bril!: BrilListItem;
  constructor(private router: Router, private brilIdService: BrilIdService) {}

  onListItemClicked() {
    console.log('do the thing');
    // if (this.bril.id) {
    //   this.brilIdService.setId(this.bril.id);
    //   this.router.navigate(['/briladvertentie']);
    // }
  }
}
