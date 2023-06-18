import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  constructor(private router: Router) {}
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  goHome() {
    console.log('/homescreen');
    this.router.navigate(['/homescreen']);
  }
}
