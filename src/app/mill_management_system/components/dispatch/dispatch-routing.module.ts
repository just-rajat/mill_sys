import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MillDispatchComponent } from './mill-dispatch/mill-dispatch.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'mill_dispatch', data: {breadcrumb: 'Mill  Withdrawal'},  component: MillDispatchComponent  },
    { path: '**', redirectTo: '/notfound' }
])],exports: [RouterModule]
})
export class DispatchRoutingModule { }
