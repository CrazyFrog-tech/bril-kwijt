import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, isDevMode } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MaterialModule } from './material-module';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { brillenLijstComponent } from './components/brillen-lijst/brillen-lijst.component';
import { BrilListItemComponent } from './components/bril-list-item/bril-list-item.component';
import { BrilAdvertentieComponent } from './components/bril-advertentie/bril-advertentie.component';
import { BrilService } from './services/bril.service';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FormsModule } from '@angular/forms';
import { AddressFromComponentComponent } from './components/address-from-component/address-from-component.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import {AuthModule} from "@auth0/auth0-angular";
import { ChatComponent } from './components/chat/chat.component';
import {CustomerService} from "./services/customer.service";
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ChatsScreenComponent } from './components/chats-screen/chats-screen.component';
import {StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {counterReducer} from "./store/reducers/counter.redcuer";

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
    AddressFromComponentComponent,
    SubscriptionComponent,
    ChatComponent,
    AppBarComponent,
    ChatsScreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({id: counterReducer}),
    AuthModule.forRoot({
      domain: 'dev-8k5u5q2o5koo17tb.us.auth0.com',
      clientId: 'uCIlaYCCY6iptKAw0dvpUc5Ce6g8rlEO',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/homescreen'
      }
    }),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [BrilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
