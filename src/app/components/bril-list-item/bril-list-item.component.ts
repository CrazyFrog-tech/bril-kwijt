import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../../dao/brilI-list-item';
import { Router } from '@angular/router';
import { BrilService } from '../../services/bril.service';
@Component({
  selector: 'app-bril-list-item',
  templateUrl: './bril-list-item.component.html',
  styleUrls: ['./bril-list-item.component.css'],
})
export class BrilListItemComponent implements OnInit{
  @Input() brilListItem!: BrilListItem;
  constructor(private router: Router, private brilIdService: BrilService) {}
  ngOnInit(): void {
    }



  onListItemClicked() {
    this.brilIdService.setId(this.brilListItem.id);
    this.router.navigate(['/briladvertentie']);
  }
}
