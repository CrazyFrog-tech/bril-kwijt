import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  @Input() isLoggedIn: Observable<boolean>;

  constructor(private router: Router) {}
  goToChatsScreen() {
    this.router.navigate(['/chatsscreen']);
  }

  goToProfileScreen() {
    this.router.navigate(['/profilescreen']);
  }






}
