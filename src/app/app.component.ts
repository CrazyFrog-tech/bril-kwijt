import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe( (authenticated) => {
      this.isLoggedIn = authenticated;
    })
  }
}
