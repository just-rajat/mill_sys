import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MillArrivalComponent } from './mill-arrival/mill-arrival.component';
import { ViewMillArrivalComponent } from './view-mill-arrival/view-mill-arrival.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'mill_arrival', data: {breadcrumb: 'Mill Deposit'},  component: MillArrivalComponent  },
    { path: 'view_mill_arrival', data: {breadcrumb: 'View Mill Deposit'},  component: ViewMillArrivalComponent  },
    { path: '**', redirectTo: '/notfound' }
])],
  exports: [RouterModule]
})
export class ArrivalRoutingModule { }
