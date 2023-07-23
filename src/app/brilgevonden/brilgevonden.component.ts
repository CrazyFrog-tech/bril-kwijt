import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { FakeBril } from '../dao/fakebril';
import { Address } from '../dao/address';


@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  post: any = '';
  formGroup = new FormGroup({
    description: new FormControl(''),
  });

  lostAtFormGroup = new FormGroup({
    lostAt: new FormControl(new Date),
  });

  addressFormGroup = new FormGroup({
    street: new FormControl(''),
    houseNr: new FormControl(''),
    zipCode: new FormControl(''),
    city: new FormControl('')
  })

  //TODO how are we gonna post it
  // first get the information from the address with formgroup and formcontrols



  constructor(private router: Router,
    private apiService: ApiService) {

  }

  goHome() {
    let description = '';
    description = this.formGroup.controls['description'].value as string;
    let dateLostAt = this.lostAtFormGroup.controls['lostAt'].value as Date;

    console.log('/homescreen');
    console.log(this.formGroup.controls['description'].value);
     let address = new Address("pijpkruidstraat", "100", "1562", "Krommenie");
    let fakeBril = new FakeBril(description, dateLostAt, address)
    this.apiService.addFakeBril(fakeBril).subscribe(
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
