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
  displayProgressSpinner: boolean = false;
  selectedFiles: FileList | null = null;
  post: any = '';
  descriptionFormGroup = new FormGroup({
  description: new FormControl(''),

  });
  titelFormGroup = new FormGroup({
    titel: new FormControl(''),
    });

  addressObject! : Address;

  lostAtFormGroup = new FormGroup({
    lostAt: new FormControl(new Date),
  });

  address = new FormGroup({
    address: new FormControl(''),
  })


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
    this.displayProgressSpinner = true;
    //todo getting specifik data from the address.
    let titel = this.titelFormGroup.controls['titel'].value as string;
    let description = this.descriptionFormGroup.controls['description'].value as string;
    let dateLostAt = this.lostAtFormGroup.controls['lostAt'].value as Date;
    let formData = new FormData();

    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    let fakeBril = new FakeBril(titel, description, dateLostAt, this.addressObject)
    formData.append('bril', JSON.stringify(fakeBril));
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    this.apiService.addFakeBril(formData).subscribe({
      next: (value) => {
        this.displayProgressSpinner =true;
      },
      error: (err) => {
        this.displayProgressSpinner = false;

      },
      complete: () => {
        this.displayProgressSpinner = false;

      },
    }
    );
    this.displayProgressSpinner = false;


    // DEBUG YHR POST METHOD WHY IT DOEN'T WORK
    this.router.navigate(['/homescreen']);
  }




  uploadDescription() {

  }
}
