import {Component, OnInit} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import {ApiService} from "../../services/api.service";
import {AppState} from "../../store/reducers/counter.state";
import {Store} from "@ngrx/store";
import {selectChat, selectId} from "../../store/actions/counter.actions";
import {Router} from "@angular/router";
@UntilDestroy()
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
    this.apiService.getAllChats().pipe(untilDestroyed(this)).subscribe(  {
      next: (chats) => {
        this.chats = chats;
        console.log(...chats)
      },
      complete: () => {},
      error: () => {}
    })
  }

  goToTheChat(chat: string) {
    sessionStorage.setItem('chatName', chat);


    this.store.dispatch(selectChat({chatMessageName: chat}));
    this.router.navigate(['/chat']);


  }
}
