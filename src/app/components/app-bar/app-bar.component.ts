import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  @Input() isLoggedIn: boolean = false;

  constructor(private router: Router) {}
  goToChatsScreen() {
    this.router.navigate(['/chatsscreen']);
  }




}
