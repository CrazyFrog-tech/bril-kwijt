import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AppState} from "../../store/reducers/counter.state";
import {Store} from "@ngrx/store";
import {selectChat, selectId} from "../../store/actions/counter.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chats-screen',
  templateUrl: './chats-screen.component.html',
  styleUrls: ['./chats-screen.component.css']
})
export class ChatsScreenComponent implements OnInit{
  chats: any[];

  constructor(private router: Router, private apiService:ApiService, private store:Store<AppState>) {
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

  goToTheChat(chat: any) {
    console.log(chat.name);
    this.store.dispatch(selectChat({chatMessageName: chat.name}));
    this.router.navigate(['/chat']);


  }
}
