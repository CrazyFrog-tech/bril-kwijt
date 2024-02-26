import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrilService} from '../../services/bril.service';
import {FakeBril} from 'src/app/dao/fakebril';
import {ApiService} from 'src/app/services/api.service';
import {HttpParams} from '@angular/common/http';

import {map, Observable, of, Subscription} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {CustomerService} from "../../services/customer.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/reducers/counter.state";
import {selectId} from "../../store/actions/counter.actions";

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit, OnDestroy {
  id: string = '';
  bril!: FakeBril;
  images: SafeUrl[] = [];
  isUserOwner$: Observable<boolean>;
  subscriptions = new Subscription();



  constructor(private router: Router,
              private apiService: ApiService, private sanitizer: DomSanitizer,
              private authService : AuthService,
              private customerService: CustomerService, private store:Store) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.store.select((state:AppState) => state).subscribe((value) => {
      this.id = value.id['id'] as string;
      console.log(this.id)
      this.apiService.getBril(this.id.toString()).subscribe((data) => {
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
    }));
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
