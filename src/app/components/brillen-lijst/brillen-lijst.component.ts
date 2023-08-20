import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BrilListItem } from './brilI-list-item';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './brillen-lijst.component.html',
  styleUrls: ['./brillen-lijst.component.css'],
})
export class brillenLijstComponent implements OnInit {
  constructor(private apiService: ApiService){}
   brilListItems: BrilListItem[] = new Array;
  ngOnInit(): void {
    this.apiService.getAllBrillen().subscribe({
      next: (res) => {
        for( var obj of res){
          console.log(obj);
          this.brilListItems.push(new BrilListItem(obj.id, obj.description, obj.imageFilenames[0]))

        }
          console.log(this.brilListItems);
      },
    })
  }
}
