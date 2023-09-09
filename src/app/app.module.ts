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
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MaterialModule } from './material-module';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { brillenLijstComponent } from './components/brillen-lijst/brillen-lijst.component';
import { BrilListItemComponent } from './components/bril-list-item/bril-list-item.component';
import { BrilAdvertentieComponent } from './components/bril-advertentie/bril-advertentie.component';
import { BrilService } from './services/bril.service';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BrilgevondenComponent,
    HomescreenComponent,
    UploadImagesComponent,
    brillenLijstComponent,
    BrilListItemComponent,
    BrilAdvertentieComponent,
    ImageSliderComponent,
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
  providers: [BrilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
