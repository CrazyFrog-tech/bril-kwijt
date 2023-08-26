import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BrilListItem } from '../../dao/brilI-list-item';
import { HttpParams } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gevonden-brillen',
  templateUrl: './brillen-lijst.component.html',
  styleUrls: ['./brillen-lijst.component.css'],
})
export class brillenLijstComponent implements OnInit {
  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }
  brilListItems: BrilListItem[] = new Array;
  image: SafeUrl | null = null;

  ngOnInit(): void {
    this.apiService.getAllBrillen().subscribe({
      next: (res) => {
        for (var obj of res) {
          let imageName = obj.imageFilenames[0];
          if (imageName !== undefined) {
            let httpParams = new HttpParams();
            httpParams = httpParams.append('imageName', imageName);
            this.apiService.getImages(httpParams).subscribe({
              next: (res) => {
                const unsafeImg = URL.createObjectURL(res);
                this.image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                let brilItem = new BrilListItem(obj.id, obj.description, this.image);

                console.log(brilItem);
                  this.brilListItems
                  .push(brilItem);
              },
            });
          }

        }
      },
    })
  }
}
