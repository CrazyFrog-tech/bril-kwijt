import { Component, Input, OnInit } from '@angular/core';
import { BrilListItem } from '../../dao/brilI-list-item';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {selectId} from "../../store/actions/counter.actions";
@Component({
  selector: 'app-bril-list-item',
  templateUrl: './bril-list-item.component.html',
  styleUrls: ['./bril-list-item.component.css'],
})
export class BrilListItemComponent implements OnInit{
  @Input() brilListItem!: BrilListItem;
  constructor(private router: Router, private store: Store) {}
  ngOnInit(): void {
    }



  onListItemClicked() {
    this.store.dispatch(selectId({id: this.brilListItem.id}));
    sessionStorage.setItem('selectedId', this.brilListItem.id);


    this.router.navigate(['/briladvertentie']);
  }
}
