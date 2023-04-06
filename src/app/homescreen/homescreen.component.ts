import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
})
export class HomescreenComponent {
  title = 'bril-kwijt';
  constructor(private router: Router) {}

  goToBrilGevonden() {
    console.log('/brilgevonden');
    this.router.navigate(['/brilgevonden']);
  }
  goToGevondenBrillen() {
    console.log('/gevondenbrillen');
    this.router.navigate(['/gevondenbrillen']);
  }
}
