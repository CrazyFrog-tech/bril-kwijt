import {Component, OnInit} from '@angular/core';
import {BrilService} from '../../services/bril.service';
import {FakeBril} from 'src/app/dao/fakebril';
import {ApiService} from 'src/app/services/api.service';
import {HttpParams} from '@angular/common/http';

import {map, Observable, of} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  bril!: FakeBril;
  images: SafeUrl[] = [];
  isUserOwner$: Observable<boolean>;



  constructor(private brilIdService: BrilService, private router: Router,
              private apiService: ApiService, private sanitizer: DomSanitizer,
              private authService : AuthService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
      this.apiService.getBril(this.id).subscribe((data) => {
        this.bril = data;
        this.isUserOwner$ = this.checkUserIsOwner(this.bril);
        this.customerService.setCustomerName(this.bril.customer?.customerName!);
        if (this.bril.imageFilenames) {
          for (let imagePath of this.bril.imageFilenames) {
            this.apiService.getImages(new HttpParams().append('imageName', imagePath)).pipe(
              map((imageBlob) => {
                const blob = new Blob([imageBlob], {type: 'application/image'});
                const unsafeImg = URL.createObjectURL(blob);
                const image: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                return image;
              })
            ).subscribe((safeImage) => {
              this.images.push(safeImage);
            });
          }
        }
      })
    });
  }

  checkUserIsOwner(bril: FakeBril): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => user?.name === bril.customer?.customerName)
    );
  }



  goToChatScreen() {
    this.router.navigate(['/chat']);

  }
}
