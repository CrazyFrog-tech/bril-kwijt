import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {FormControl} from "@angular/forms";
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Client, IFrame, Stomp} from "@stomp/stompjs";
import {Message} from "../../dao/message";
import * as SockJS from "sockjs-client";
import {Customer} from "../../dao/customer";
import {CustomerService} from "../../services/customer.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/reducers/counter.state";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked{
  url: string = "http://localhost:8083/brilkwijt";
  otherUser = new Customer("");
  thisUser= new Customer("");
  channelName?: string;
  socket?: WebSocket;
  stompClient?: Client;
  newMessage = new FormControl('');
  messages?: Observable<Array<Message>>;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private el: ElementRef,
    public auth: AuthService,
    public customerService : CustomerService,
    private store:Store) {}


  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.thisUser.customerName = user?.email!;
      this.customerService.loggedInCustomerName$.subscribe(name => {
        this.otherUser.customerName = name;
        this.connectToChat();
        this.el.nativeElement.querySelector("#chat").scrollIntoView();
      })
    });

  }
  ngOnDestroy(): void {
    // Close the WebSocket connection when the component is destroyed
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }

  ngAfterViewChecked(): void {
    this.scrollDown();
  }

  scrollDown(){
    var container = this.el.nativeElement.querySelector("#chat");
    container.scrollTop = container.scrollHeight;
  }

  connectToChat() {
    // const id1 = this.thisUser.customerName!;
    const nick1 = this.thisUser.customerName;
    // const id2 = this.otherUser?.customerName!;
    const nick2 = this.otherUser?.customerName!;

    // if (id1 > id2) {
    if(nick1 && nick2){
      this.channelName = nick1 + '&' + nick2;
    }else{
      this.store.select((state:any) => state.brilState.brilState.chatMessageName).subscribe(
        (chatMessageName) => {
          if(chatMessageName){
            this.channelName=chatMessageName;

          }
        }
      )

    }

    // } else {
    //   this.channelName = nick2 + '&' + nick1;
    // }
    this.loadChat();
    console.log('connecting to chat...');
    this.socket = new SockJS(this.url + '/chat');
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.onConnect = (frame:IFrame) => {
      //func = what to do when connection is established
      console.log('connected to: ' + frame);
      this.stompClient!.subscribe(
        '/topic/messages/' + this.channelName,
        (response) => {
          //func = what to do when client receives data (messages)
          this.loadChat();
        }
      );
    };
    // Handle errors
    this.stompClient.onStompError = (frame) => {
      console.error('Stomp error:', frame);
    };

    // Connect to the WebSocket
    this.stompClient.activate();
  }

  sendMsg() {
    if (this.newMessage.value !== '') {
      // Use publish instead of send
      this.stompClient!.publish({
        destination: '/app/chat/' + this.channelName,
        body: JSON.stringify({
          sender: this.thisUser.customerName,
          t_stamp: 'to be defined in server',
          content: this.newMessage.value,
        }),
      });

      this.newMessage.setValue('');
    }
  }

  loadChat(){
    this.messages = this.http.post<Array<Message>>(this.url+'/getMessages' ,  this.channelName);
    this.messages.subscribe(data => {
      let mgs:Array<Message> = data;
      mgs.sort((a, b) => (a.ms_id > b.ms_id) ? 1 : -1)
      this.messages = of(mgs);
    })
    this.messages.subscribe(res => console.log(res + "hallo"));
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
