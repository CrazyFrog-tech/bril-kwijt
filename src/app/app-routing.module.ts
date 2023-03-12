import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BrilgevondenComponent } from './brilgevonden/brilgevonden.component';

const routes: Routes = [
  {path: '', component: AppComponent  },
  {path: 'brilgevonden', component: BrilgevondenComponent  }
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }