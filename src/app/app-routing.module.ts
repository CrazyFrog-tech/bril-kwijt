import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { AuthGuard } from '@auth0/auth0-angular';
import { BrilAdvertentieComponent } from './components/bril-advertentie/bril-advertentie.component';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import { brillenLijstComponent } from './components/brillen-lijst/brillen-lijst.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsScreenComponent } from './components/chats-screen/chats-screen.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  {path: '', redirectTo: '/homescreen', pathMatch: 'full'}, // Default redirection to 'home'
  {path: 'brilgevonden', component: BrilgevondenComponent, canActivate: [AuthGuard]},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'gevondenbrillen', component: brillenLijstComponent, canActivate: [AuthGuard]},
  { path: 'briladvertentie', component: BrilAdvertentieComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions', component: SubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'chatsscreen', component: ChatsScreenComponent, canActivate: [AuthGuard] },
  { path: 'profilescreen', component: ProfileScreenComponent, canActivate: [AuthGuard] }
];


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
