import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Client, Stomp } from '@stomp/stompjs';
import { Observable, of, Subscription } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../../environments/environment';
import { Customer } from '../../dao/customer';
import { Message } from '../../dao/message';
import { CustomerService } from '../../services/customer.service';

@UntilDestroy()
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
    @ViewChild('chat') chat: ElementRef;

    url: string = environment.apiURL;
    otherUser = new Customer('');
    thisUser = new Customer('');
    channelName?: string;
    socket?: WebSocket;
    stompClient?: Client;
    newMessage = new FormControl('');
    messages?: Observable<Array<Message>>;
    currentMessages: Observable<Array<Message>>;
    subscriptions = new Subscription();

    constructor(
        private http: HttpClient,
        private el: ElementRef,
        public auth: AuthService,
        public customerService: CustomerService,
        private store: Store) {

    }

    ngOnInit(): void {
        this.auth.user$.pipe(untilDestroyed(this)).subscribe(user => {
            this.thisUser.customerName = user?.email!;
            this.customerService.otherCustomerName$.subscribe(name => {
                console.log('other customer name: ' + name);
                this.otherUser.customerName = name;
                this.connectToChat();
                this.el.nativeElement.querySelector('#chat')?.scrollIntoView();
            });
        });

    }

    ngOnDestroy(): void {
        // Close the WebSocket connection when the component is destroyed
        if (this.stompClient) {
            this.stompClient.deactivate();
        }
    }

    ngAfterViewChecked(): void {
        if (this.chat.nativeElement) {
            this.scrollDown();
        }
    }

    scrollDown() {
        this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
    }

    connectToChat() {
        const firstUserName = this.thisUser.customerName;
        const secondUserName = this.otherUser?.customerName!;
        this.setChannelName(firstUserName, secondUserName);
        this.loadChat();
        this.stompClient = Stomp.over(() => new SockJS(this.url + '/websocket'));
        this.stompClient.onConnect = (frame) => {
            // what to do when connection is established
            if (this.stompClient) {
                this.subscriptions.add(this.stompClient.subscribe(
                    '/topic/messages/' + this.channelName,
                    (response) => {
                        //what to do when client receives data (messages)
                        this.loadChat();
                    }
                ));
            }
        };
        // Handle errors
        this.stompClient.onStompError = (frame) => {
        };
        this.stompClient.activate();
    }

    setChannelName(firstUserName: string, secondUserName: string) {
        this.channelName = firstUserName && secondUserName
            ? firstUserName + '&' + secondUserName
            : this.getChannelNameFromStoreOrSession();

        sessionStorage.setItem('chatName', this.channelName);
    }

    getChannelNameFromStoreOrSession(): string {
        let channelName = sessionStorage.getItem('chatName');
        this.store.select((state: any) => state.brilState.brilState.chatMessageName).subscribe(
            (chatMessageName) => {
                channelName = chatMessageName || channelName;
            }
        );
        return channelName;
    }

    sendMsg() {
        if (this.newMessage.value !== '' && this.stompClient) {
            // Use publish instead of send
            this.stompClient.publish({
                destination: '/app/chat/' + this.channelName,
                body: JSON.stringify({
                    sender: this.thisUser.customerName,
                    t_stamp: 'to be defined in server',
                    content: this.newMessage.value
                })
            });

            this.newMessage.setValue('');
        } else {
            console.log('no stomp client');
        }
    }

    loadChat() {
        this.messages = this.http.post<Array<Message>>(this.url + '/getMessages', this.channelName);
        this.subscriptions.add(this.messages.pipe(untilDestroyed(this)).subscribe(data => {
            let mgs: Array<Message> = data;
            mgs.sort((a, b) => (a.ms_id > b.ms_id) ? -1 : 1);
            this.currentMessages = of(mgs);
        }));
    }

    whenWasItPublished(myTimeStamp: string) {
        const endDate = myTimeStamp.indexOf('-');
        return (
            myTimeStamp.substring(0, endDate) +
            ' at ' +
            myTimeStamp.substring(endDate + 1)
        );
    }

}
