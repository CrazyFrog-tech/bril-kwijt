import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FakeBril } from '../../dao/fakebril';
import { Address } from '../../dao/address';
import PlaceResult = google.maps.places.PlaceResult;
import { GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';



@Component({
  selector: 'app-brilgevonden',
  templateUrl: './brilgevonden.component.html',
  styleUrls: ['./brilgevonden.component.css'],
})
export class BrilgevondenComponent {
  public selectedAddress!: PlaceResult;

  selectedFiles: FileList | null = null;
  post: any = '';
  formGroup = new FormGroup({
    description: new FormControl(''),
  });

  addressObject! : Address;

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

  onAutoCompleteSelected(result: GermanAddress) {
    let street = result.streetName || '';
    let houseNr = result.streetNumber || '';
    let zipCode = result.postalCode || '';
    let city = result.state?.long || '';

    this.addressObject = new Address(street, houseNr, "" + zipCode, city);

    console.log('onAutocompleteSelected: ', result);
  }
  getSelectedFiles(event: any): void {
    debugger;
    this.selectedFiles = event.target.files;
  }

  goHome() {
    //todo getting specifik data from the address.

    let description = '';
    description = this.formGroup.controls['description'].value as string;
    let dateLostAt = this.lostAtFormGroup.controls['lostAt'].value as Date;
    let formData = new FormData();

    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    let addrezz = this.address.controls['address'].value || " ";
    let fakeBril = new FakeBril(description, dateLostAt, this.addressObject)
    formData.append('bril', JSON.stringify(fakeBril));
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    this.apiService.addFakeBril(formData).subscribe(
      data => {
      }
    )
    // DEBUG YHR POST METHOD WHY IT DOEN'T WORK
    this.router.navigate(['/homescreen']);
  }




  uploadDescription() {

  }
}
