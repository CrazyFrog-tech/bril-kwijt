import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, catchError, forkJoin, map, switchMap, tap, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { BrilListItem } from '../../dao/brilI-list-item';
@UntilDestroy()
@Component({
    selector: 'app-gevonden-brillen',
    templateUrl: './brillen-lijst.component.html',
    styleUrls: ['./brillen-lijst.component.css']
})
export class brillenLijstComponent implements OnInit {
    isLoadingBrillen = new BehaviorSubject<boolean>(true);
    brilListItems: BrilListItem[] = [];
    image: SafeUrl | null = null;

    constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.isLoadingBrillen.next(true);
        this.apiService.getAllBrillen().pipe(
            switchMap((brillen) => {
                const imageRequests = brillen.map((bril) =>
                    this.apiService.getImages(new HttpParams().append('imageName', bril.imageBlobIds[0])).pipe(
                        map((imageBlob) => {
                            const blob = new Blob([imageBlob], { type: 'application/image' });
                            const unsafeImg = URL.createObjectURL(blob);
                            const image: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                            return new BrilListItem(bril.id, bril.titel, bril.lostAtDate, bril.address, bril.brand, image);
                        })
                    )
                );
                return forkJoin(imageRequests);
            }),

            tap((brilListItems) => this.brilListItems = brilListItems),
            tap(() => setTimeout(() => {
                    this.isLoadingBrillen.next(false);
                }, 10)
            ),
            catchError((error) => {
                this.isLoadingBrillen.next(false);
                return throwError(() => error);
            }),
            untilDestroyed(this)
        ).subscribe();
    }

}
