import { HttpClientModule } from '@angular/common/http';

import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFromComponentComponent } from './components/address-from-component/address-from-component.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { BrilAdvertentieComponent } from './components/bril-advertentie/bril-advertentie.component';
import { BrilListItemComponent } from './components/bril-list-item/bril-list-item.component';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import { brillenLijstComponent } from './components/brillen-lijst/brillen-lijst.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ChatsScreenComponent } from './components/chats-screen/chats-screen.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { MaterialModule } from './material-module';
import { BrilService } from './services/bril.service';
import { counterReducer } from './store/reducers/counter.redcuer';

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
        GoogleMapsModule,
        HttpClientModule,
        StoreModule.forRoot({ brilState: counterReducer }),
        AuthModule.forRoot({
            domain: 'dev-8k5u5q2o5koo17tb.us.auth0.com',
            clientId: 'uCIlaYCCY6iptKAw0dvpUc5Ce6g8rlEO',
            authorizationParams: {
                redirect_uri: environment.redirect_uri,
            }
        }),

        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        LoadingSpinnerComponent
    ],
    providers: [BrilService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
