import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  post: any = '';
  formGroup = new FormGroup({
    description: new FormControl(''),


  })



  constructor(private router: Router,
    ) {


    }




  goHome() {
    console.log('/homescreen');
    console.log(this.formGroup.value);
    this.router.navigate(['/homescreen']);
  }




  uploadDescription() {

  }
}
