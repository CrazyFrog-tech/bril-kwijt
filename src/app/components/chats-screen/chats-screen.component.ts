import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { selectChat } from '../../store/actions/bril.actions';
import { AppState } from '../../store/reducers/bril.state';

@UntilDestroy()
@Component({
    selector: 'app-chats-screen',
    templateUrl: './chats-screen.component.html',
    styleUrls: ['./chats-screen.component.css']
})
export class ChatsScreenComponent implements OnInit {
    chats: any[];

    constructor(private router: Router, private apiService: ApiService, private store: Store<AppState>, private readonly authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.user$.pipe(untilDestroyed(this),
            switchMap((user) => {
                return this.apiService.getAllChatsForUser(user.name);

            }),
            tap((receivedChats) => this.chats = receivedChats)).subscribe();
    }

    goToTheChat(chat: string) {
        sessionStorage.setItem('chatName', chat);

        this.store.dispatch(selectChat({ chatMessageName: chat }));
        this.router.navigate(['/chat']);

    }
}
