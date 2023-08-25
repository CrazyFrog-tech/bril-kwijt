import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../brillen-lijst/brilI-list-item';
import { Router } from '@angular/router';
import { BrilIdService } from '../../services/bril-id.service';
@Component({
  selector: 'app-bril-list-item',
  templateUrl: './bril-list-item.component.html',
  styleUrls: ['./bril-list-item.component.css'],
})
export class BrilListItemComponent implements OnInit{
  @Input() brilListItem!: BrilListItem;
  constructor(private router: Router, private brilIdService: BrilIdService) {}
  ngOnInit(): void {
    console.log(this.brilListItem);
    }



  onListItemClicked() {
    //TODO remove this console log on list item clicked
    console.log(this.brilListItem.imageContent);
    console.log(this.brilListItem.imageContent);
  }
}
