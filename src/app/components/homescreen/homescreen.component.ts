import {Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    this.auth.isAuthenticated$.pipe(untilDestroyed(this)).subscribe(
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
    this.router.navigate(['/gevondenbrillen']);
  }
  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
