import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { select, Store } from '@ngrx/store';

import { map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { Bril } from 'src/app/dao/bril';
import { ApiService } from 'src/app/services/api.service';
import { CustomerService } from '../../services/customer.service';
import { selectAdId } from '../../store/actions/bril.actions';
import { AppState } from '../../store/reducers/bril.state';

@Component({
    selector: 'app-bril-advertentie',
    templateUrl: './bril-advertentie.component.html',
    styleUrls: ['./bril-advertentie.component.css']
})
export class BrilAdvertentieComponent implements OnInit, OnDestroy {
    id: string = '';
    bril!: Bril;
    images: SafeUrl[] = [];
    isUserOwner$: Observable<boolean>;
    subscriptions = new Subscription();

    constructor(private router: Router,
                private apiService: ApiService, private sanitizer: DomSanitizer,
                private authService: AuthService,
                private customerService: CustomerService, private store: Store<AppState>) {
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    ngOnInit(): void {
        this.retrieveSelectedIdFromLocalStorage();
        this.subscribeToBrilState();
    }

    checkUserIsOwner(bril: Bril): Observable<boolean> {
        return this.authService.user$.pipe(
            map(user => user?.name === bril.customer?.customerName)
        );
    }

    goToChatScreen() {
        this.router.navigate(['/chat']);

    }

    private retrieveSelectedIdFromLocalStorage(): void {
        const savedId = sessionStorage.getItem('selectedId');
        if (savedId) {
            this.store.dispatch(selectAdId({ id: savedId }));
        }
    }

    private subscribeToBrilState(): void {
        this.subscriptions.add(
            this.store.pipe(
                select((state: any) => state.brilState.brilState),
                switchMap((value) => this.apiService.getBril(value.id))
            ).subscribe((bril) => {
                this.bril = bril;
                this.isUserOwner$ = this.checkUserIsOwner(bril);
                this.authService.user$.pipe(
                    tap((user) => {
                        if(this.bril.customer?.customerName! !== user?.name){
                            this.customerService.setCustomerName(this.bril.customer?.customerName!);
                        }
                    })
                ).subscribe();
                this.loadBrilImages(bril.imageBlobIds);
            })
        );
    }

    private loadBrilImages(imageBlobIds: string[]): void {
        let imageFilenames = imageBlobIds.map((imageName) => {
            return imageName;
        });
        if (imageFilenames) {
            for (let imagePath of imageFilenames) {
                this.apiService.getImages(new HttpParams().append('imageName', imagePath))
                    .pipe(
                        map((imageBlob) => {
                            const blob = new Blob([imageBlob], { type: 'application/image' });
                            const unsafeImg = URL.createObjectURL(blob);
                            return this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                        })
                    )
                    .subscribe((safeImage) => {
                        this.images.push(safeImage);
                    });
            }
        }
    }
}
