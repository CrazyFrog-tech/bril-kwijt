import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BrilListItem } from '../../dao/brilI-list-item';
import { HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './brillen-lijst.component.html',
  styleUrls: ['./brillen-lijst.component.css'],
})
export class brillenLijstComponent implements OnInit {
  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }
  brilListItems: BrilListItem[] = new Array;
  image: SafeUrl | null = null;

  ngOnInit() {

    this.apiService.getAllBrillen().pipe(
      switchMap((brillen) => {
        const imageRequests = brillen.map((obj) =>
          this.apiService.getImages(new HttpParams().append('imageName', obj.imageFilenames[0])).pipe(
            map((imageBlob) => {
              const blob = new Blob([imageBlob], { type: 'application/image' });
              const unsafeImg = URL.createObjectURL(blob);
              const image: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
              return new BrilListItem(obj.id, obj.titel, image);
            })
          )
        );
        return forkJoin(imageRequests);
      })
    ).subscribe((brilListItems) => {
      this.brilListItems = brilListItems;
    });
  }


}
