import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  constructor(private router: Router) {}

  goHome() {
    console.log('/homescreen');
    this.router.navigate(['/homescreen']);
  }
}
