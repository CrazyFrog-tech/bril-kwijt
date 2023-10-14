import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import PlaceResult = google.maps.places.PlaceResult;
import { Address } from 'src/app/dao/address';


@Component({
  selector: 'app-address-from-component',
  templateUrl: './address-from-component.component.html',
  styleUrls: ['./address-from-component.component.css']
})
export class AddressFromComponentComponent {
  @Output() addressEmitted: EventEmitter<Address> = new EventEmitter<Address>();

  addressForm = this.fb.group({
    street: [null, Validators.required],
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
  });

  constructor(private fb: FormBuilder) {
    if(this.addressForm.valid){
      let addressMap = this.makeAddresMap();
      this.addressEmitted.emit(addressMap);
    }
  }
  private makeAddresMap() {
    let streetValue = this.extractFormControlValue(this.addressForm.controls.street);
    let cityValue = this.extractFormControlValue(this.addressForm.controls.city);
    let postalCodeValue = this.extractFormControlValue(this.addressForm.controls.postalCode);
    let houseNrValue = this.extractFormControlValue(this.addressForm.controls.houseNr);
    let addressData = new Address(streetValue, houseNrValue, postalCodeValue, cityValue);
    return addressData;
  }

  extractFormControlValue(formcontrol: FormControl){
    return formcontrol.value !== null
    ? formcontrol.value as string
    : '';
  }
onInputChange(event: any){
  if(this.addressForm.valid){
    let addressMap = this.makeAddresMap();
    console.log(addressMap);
    this.addressEmitted.emit(addressMap);
  }
}

}
