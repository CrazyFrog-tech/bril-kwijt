import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isLoggedIn: Observable<boolean>;
    isLoading: Observable<boolean>;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.isLoggedIn = this.authService.isAuthenticated$;
        this.isLoading = this.authService.isLoading$;
    }
}
