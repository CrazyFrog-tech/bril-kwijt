import { Component, OnInit } from '@angular/core';
import { Brillen } from '../bril-list-item/Bril';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './brillen-lijst.component.html',
  styleUrls: ['./brillen-lijst.component.css'],
})
export class brillenLijstComponent implements OnInit {
  brillen = Brillen;
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getAllBrillen().subscribe({
      next(value) {
          console.log(value);
      },
    })
  }


}
