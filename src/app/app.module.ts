import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrilgevondenComponent } from './brilgevonden/brilgevonden.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MaterialModule } from './material-module';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { AutocompleteMapsComponent } from './autocomplete-maps/autocomplete-maps.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { brillenLijstComponent } from './brillen-lijst/brillen-lijst.component';
import { BrilListItemComponent } from './bril-list-item/bril-list-item.component';
import { BrilAdvertentieComponent } from './bril-advertentie/bril-advertentie.component';
import { BrilIdService } from './services/bril-id.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    BrilgevondenComponent,
    HomescreenComponent,
    UploadImagesComponent,
    AutocompleteMapsComponent,
    brillenLijstComponent,
    BrilListItemComponent,
    BrilAdvertentieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MaterialModule,
    HttpClientModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5GlLUadijlWkWIRdpFDaYhHyVEWrpENc',
      libraries: ['places'],
    }),
  ],
  providers: [BrilIdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
