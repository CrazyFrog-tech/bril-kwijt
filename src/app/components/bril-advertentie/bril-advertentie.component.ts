import {Component, OnInit} from '@angular/core';
import {BrilService} from '../../services/bril.service';
import {FakeBril} from 'src/app/dao/fakebril';
import {ApiService} from 'src/app/services/api.service';
import {HttpParams} from '@angular/common/http';

import {map} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bril-advertentie',
  templateUrl: './bril-advertentie.component.html',
  styleUrls: ['./bril-advertentie.component.css'],
})
export class BrilAdvertentieComponent implements OnInit {
  id: string = '';
  bril!: FakeBril;
  images: SafeUrl[] = [];


  constructor(private brilIdService: BrilService, private router: Router, private apiService: ApiService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

    this.brilIdService.selectedId$.subscribe((value) => {
      this.id = value;
      console.log(this.id);
      this.apiService.getBril(this.id).subscribe((data) => {
        this.bril = data;
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
    // let tempBril = this.brillen.find((obj) => obj.id === this.id);
    // if (tempBril) {
    //   this.bril = tempBril;
    // }
  }

  goToChatScreen() {
    this.router.navigate(['/chat']);

  }
}
