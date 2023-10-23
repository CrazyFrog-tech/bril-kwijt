import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../../dao/address';
import { FakeBril } from '../../dao/fakebril';
import { ApiService } from '../../services/api.service';
import PlaceResult = google.maps.places.PlaceResult;

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
  brilDetails = new FormGroup({
    description: new FormControl(''),
    titel: new FormControl(''),
    lostAt: new FormControl(new Date()),
    color: new FormControl(''),
    brand: new FormControl (''),
  });
  addressObject: Address;

  address = new FormGroup({
    address: new FormControl(''),
  });

  constructor(private router: Router, private apiService: ApiService) {
    this.addressObject = new Address();
  }

  getSelectedFiles(event: any): void {
    this.selectedFiles = event.target.files;
  }

  goHome() {
    this.displayProgressSpinner = true;
    //todo getting specifik data from the address.
    let titel = this.brilDetails.controls['titel'].value as string;
    let description = this.brilDetails.controls['description'].value as string;
    let dateLostAt =this.exposeDate(this.brilDetails.controls['lostAt'].value as Date);
    let color = this.brilDetails.controls['color'].value as string;
    let brand = this.brilDetails.controls['brand'].value as string;


    let formData = new FormData();

    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    let fakeBril = new FakeBril(
      titel,
      description,
      dateLostAt,
      this.addressObject,
      color,
      brand
    );
    formData.append('bril', JSON.stringify(fakeBril));
    this.apiService.addFakeBril(formData).subscribe({
      next: (value) => {
        this.displayProgressSpinner = true;
      },
      error: (err) => {
        this.displayProgressSpinner = false;
      },
      complete: () => {
        this.displayProgressSpinner = false;
      },
    });
    this.displayProgressSpinner = false;

    this.router.navigate(['/homescreen']);
  }

  uploadDescription() {}

  exposeDate(date: Date) {
    let dateObj = date;
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return year + '/' + month + '/' + day;
  }

  handleAddress(addressData: any) {
    this.addressObject = addressData as Address;
  }
}
