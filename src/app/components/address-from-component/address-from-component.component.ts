import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import PlaceResult = google.maps.places.PlaceResult;
import { Address } from 'src/app/dao/address';

@Component({
  selector: 'app-address-from-component',
  templateUrl: './address-from-component.component.html',
  styleUrls: ['./address-from-component.component.css'],
})
export class AddressFromComponentComponent {
  @Output() addressEmitted: EventEmitter<Address> = new EventEmitter<Address>();

  addressForm = this.fb.group({
    address: [''],
    street: ['', Validators.required],
    city: ['', Validators.required],
    houseNr: ['', Validators.required],
    postalCode: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    ],
  });

  constructor(private fb: FormBuilder) {
    if (this.addressForm.valid) {
      let addressMap = this.makeAddresMap();
      this.addressEmitted.emit(addressMap);
    }
  }

  fillInAddressForm(place: PlaceResult) {
    const addressComponents = place.address_components || [];

    const street = addressComponents.find((component) =>
      component.types.includes('route')
    );
    const city = addressComponents.find((component) =>
      component.types.includes('locality')
    );
    const postalcode = addressComponents.find((component) =>
      component.types.includes('postal_code')
    );
    const housenr = addressComponents.find((component) =>
      component.types.includes('street_number')
    );

    this.addressForm.controls.street.setValue(street ? street.long_name : '');
    this.addressForm.controls.city.setValue(city ? city.long_name : '');
    this.addressForm.controls.postalCode.setValue(
      postalcode ? postalcode.long_name : ''
    );
    this.addressForm.controls.houseNr.setValue(
      housenr ? housenr.long_name : ''
    );
  }
  private makeAddresMap() {
    let streetValue = this.extractFormControlValue(
      this.addressForm.controls.street
    );
    let cityValue = this.extractFormControlValue(
      this.addressForm.controls.city
    );
    let postalCodeValue = this.extractFormControlValue(
      this.addressForm.controls.postalCode
    );
    let houseNrValue = this.extractFormControlValue(
      this.addressForm.controls.houseNr
    );
    let addressData = new Address(
      streetValue,
      houseNrValue,
      postalCodeValue,
      cityValue
    );
    return addressData;
  }

  extractFormControlValue(formcontrol: FormControl) {
    return formcontrol.value !== null ? (formcontrol.value as string) : '';
  }
  onInputChange(event: any) {
    if (this.addressForm.valid) {
      let addressMap = this.makeAddresMap();
      console.log(addressMap);
      this.addressEmitted.emit(addressMap);
    }
  }
}
