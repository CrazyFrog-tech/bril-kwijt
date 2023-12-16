import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
