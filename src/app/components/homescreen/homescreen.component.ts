import {Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent {
  title = 'bril-kwijt';
  constructor(private router: Router, public auth: AuthService,   @Inject(DOCUMENT) public document: Document) {

  }
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(
      value => console.log('Authentication Status:', value),
      error => console.error('Error:', error),
      () => console.log('Observable completed')
    );
    this.auth.isLoading$.subscribe(
      value => console.log('Authentication Status:', value),
      error => console.error('Error:', error),
      () => console.log('Observable completed')
    );
  }

  goToBrilGevonden() {
    console.log('/brilgevonden');
    this.router.navigate(['/brilgevonden']);
  }
  goToGevondenBrillen() {
    console.log('/gevondenbrillen');
    this.router.navigateByUrl('/gevondenbrillen');
  }
  login() {
    this.auth.loginWithRedirect({
      authorizationParams: {
      redirect_uri: 'http://localhost:4200/homescreen'
      }});
    this.router.navigateByUrl('/gevondenbrillen');

  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
