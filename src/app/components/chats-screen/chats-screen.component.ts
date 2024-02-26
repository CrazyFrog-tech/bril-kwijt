import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-chats-screen',
  templateUrl: './chats-screen.component.html',
  styleUrls: ['./chats-screen.component.css']
})
export class ChatsScreenComponent implements OnInit{
  chats: any[];

  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllChats().subscribe(  {
      next: (chats) => {
        this.chats = chats;
        console.log(...chats)
      },
      complete: () => {},
      error: () => {}
    })
  }

}
