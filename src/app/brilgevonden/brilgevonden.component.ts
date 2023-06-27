import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FakeBril } from './fakebril';


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
    private apiService: ApiService) {

  }




  goHome() {
    let description = '';
    description = this.formGroup.controls['description'].value as string;

    console.log('/homescreen');
    console.log(this.formGroup.controls['description'].value);
    this.apiService.addFakeBril(new FakeBril(description)).subscribe(
      data =>{
        console.log('gello');
      }
    )
    // DEBUG YHR POST METHOD WHY IT DOEN'T WORK
    this.router.navigate(['/homescreen']);
  }




  uploadDescription() {

  }
}
