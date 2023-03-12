import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrilgevondenComponent } from './brilgevonden/brilgevonden.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bril-kwijt';
  constructor(private router:Router) {}

  goToBrilGevonden() {
    console.log('/brilgevonden');
    this.router.navigate(['/brilgevonden']);

  }

}


