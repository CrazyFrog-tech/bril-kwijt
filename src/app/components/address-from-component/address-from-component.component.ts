import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-from-component',
  templateUrl: './address-from-component.component.html',
  styleUrls: ['./address-from-component.component.css']
})
export class AddressFromComponentComponent {
  addressForm = this.fb.group({
    address: [null, Validators.required],
    city: [null, Validators.required],
    houseNr: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])
    ],
    shipping: ["free", Validators.required]
  });

  constructor(private fb: FormBuilder) {}


  hasUnitNumber = false;

}
