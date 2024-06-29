import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-screen',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MatFabButton
  ],
  templateUrl: './profile-screen.component.html',
  styleUrl: './profile-screen.component.css'
})
export class ProfileScreenComponent {
  constructor(private router: Router, public auth: AuthService, @Inject(DOCUMENT) public document: Document) {
  }
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }

  goToHomePage() {
    this.router.navigate(['/homescreen']);

  }
}
