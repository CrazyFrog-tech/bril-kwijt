import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule,  } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrilgevondenComponent } from './brilgevonden/brilgevonden.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {MaterialModule} from './material-module';
import { UploadImagesComponent } from './upload-images/upload-images.component';


@NgModule({
  declarations: [
    AppComponent,
    BrilgevondenComponent,
    HomescreenComponent,
    UploadImagesComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


