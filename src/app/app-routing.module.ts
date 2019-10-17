import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CordeliaDashboardComponent} from './cordelia-dashboard/cordelia-dashboard.component';
import { OnlineCoopComponent} from './online-coop/online-coop.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CordeliaDashboardComponent },
  { path: 'cloudcoop', component: OnlineCoopComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
