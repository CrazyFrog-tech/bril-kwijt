import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import PlaceResult = google.maps.places.PlaceResult;


@Component({
  selector: 'app-address-from-component',
  templateUrl: './address-from-component.component.html',
  styleUrls: ['./address-from-component.component.css']
})
export class AddressFromComponentComponent {
  @Output() mapEmitted: EventEmitter<Map<string, string>> = new EventEmitter<Map<string, string>>();

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
    debugger
    if(this.addressForm.valid){
      let addressMap = this.makeAddresMap();
      this.mapEmitted.emit(addressMap);
    }
  }
  private makeAddresMap() {
    let mapData = new Map<string, string>();


    let streetValue = this.extractFormControlValue(this.addressForm.controls.street);
    let cityValue = this.extractFormControlValue(this.addressForm.controls.city);
    let postalCodeValue = this.extractFormControlValue(this.addressForm.controls.postalCode);
    let houseNrValue = this.extractFormControlValue(this.addressForm.controls.houseNr);
    mapData.set('street', streetValue);
    mapData.set('city', cityValue);
    mapData.set('postalCode', postalCodeValue);
    mapData.set('houseNr', houseNrValue);
    return mapData;
  }

  extractFormControlValue(formcontrol: FormControl){
    return formcontrol.value !== null
    ? formcontrol.value as string
    : '';
  }
onInputChange(event: any){
  if(this.addressForm.valid){
    let addressMap = this.makeAddresMap();
    this.mapEmitted.emit(addressMap);
  }
}

}
