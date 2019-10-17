import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CordeliaDashboardComponent} from './cordelia-dashboard/cordelia-dashboard.component';
import { CloudCoopComponent} from './cloud-coop/cloud-coop.component';

const routes: Routes = [
  { path: 'dashboard', component: CordeliaDashboardComponent },
  { path: 'cloudcoop', component: CloudCoopComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
