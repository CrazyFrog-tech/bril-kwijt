import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FakeBril } from '../../dao/fakebril';
import { Address } from '../../dao/address';


@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  selectedFiles: FileList | null = null;
  post: any = '';
  formGroup = new FormGroup({
    description: new FormControl(''),
  });

  lostAtFormGroup = new FormGroup({
    lostAt: new FormControl(new Date),
  });

  address = new FormGroup({
    address: new FormControl(''),
  })

  //TODO how are we gonna post it
  // first get the information from the address with formgroup and formcontrols



  constructor(private router: Router,
    private apiService: ApiService) {

  }
  onchange(event: any): void {
    this.selectedFiles = event.target.files;
  }

  goHome() {
    console.log(this.address.controls['address']);
    let description = '';
    description = this.formGroup.controls['description'].value as string;
    let dateLostAt = this.lostAtFormGroup.controls['lostAt'].value as Date;
    let formData = new FormData();

    console.log('/homescreen');
    console.log(this.formGroup.controls['description'].value);
    if (this.selectedFiles && this.selectedFiles.length) {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('images', this.selectedFiles[i]);
    }
  }
  let addrezz = this.address.controls['address'].value || " ";
    let fakeBril = new FakeBril(description, dateLostAt, addrezz)
    formData.append('bril', JSON.stringify(fakeBril));
    console.log(formData);
    this.apiService.addFakeBril(formData).subscribe(
      data =>{
        console.log(data);
      }
    )
    // DEBUG YHR POST METHOD WHY IT DOEN'T WORK
    this.router.navigate(['/homescreen']);
  }




  uploadDescription() {

  }
}
