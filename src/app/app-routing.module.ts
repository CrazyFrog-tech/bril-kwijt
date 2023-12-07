import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BrilgevondenComponent } from './components/brilgevonden/brilgevonden.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { brillenLijstComponent } from './components/brillen-lijst/brillen-lijst.component';
import { BrilAdvertentieComponent } from './components/bril-advertentie/bril-advertentie.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'brilgevonden', component: BrilgevondenComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'gevondenbrillen', component: brillenLijstComponent },
  { path: 'briladvertentie', component: BrilAdvertentieComponent },
  { path: 'subscriptions', component: SubscriptionComponent },

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
