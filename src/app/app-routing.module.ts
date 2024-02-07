import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; // CLI imports router
import {BrilgevondenComponent} from './components/brilgevonden/brilgevonden.component';
import {HomescreenComponent} from './components/homescreen/homescreen.component';
import {brillenLijstComponent} from './components/brillen-lijst/brillen-lijst.component';
import {BrilAdvertentieComponent} from './components/bril-advertentie/bril-advertentie.component';
import {SubscriptionComponent} from './components/subscription/subscription.component';
import {AuthGuard} from "@auth0/auth0-angular";
import {ChatComponent} from "./components/chat/chat.component";
import {ChatsScreenComponent} from "./components/chats-screen/chats-screen.component";

const routes: Routes = [
  {path: '', redirectTo: '/homescreen', pathMatch: 'full'}, // Default redirection to 'home'
  {path: 'brilgevonden', component: BrilgevondenComponent, canActivate: [AuthGuard]},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'gevondenbrillen', component: brillenLijstComponent, canActivate: [AuthGuard]},
  {path: 'briladvertentie', component: BrilAdvertentieComponent},
  {path: 'subscriptions', component: SubscriptionComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'chatsscreen', component: ChatsScreenComponent},


];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
