import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonMasterComponent } from './season-master/season-master.component';
import { CommodityMasterComponent } from './commodity-master/commodity-master.component';
import { CommodityConvMasterComponent } from './commodity-conv-master/commodity-conv-master.component';
import { MillMasterComponent } from './mill-master/mill-master.component';
import { CenterWhMasterComponent } from './center-wh-master/center-wh-master.component';
import { UserMillMappingComponent } from './user-mill-mapping/user-mill-mapping.component';

const routes: Routes = [
  { path: 'season', data: {breadcrumb: 'Season'}, component: SeasonMasterComponent},
  { path: 'commodity', data: {breadcrumb: 'Commodity'}, component: CommodityMasterComponent},
  { path: 'commodity-conv', data: {breadcrumb: 'Commodity Conversion'}, component: CommodityConvMasterComponent},
  { path: 'mill', data: {breadcrumb: 'Mill Creation'}, component: MillMasterComponent},
  { path: 'center-wh', data: {breadcrumb: 'Center Warehouse Creation'}, component: CenterWhMasterComponent},
  { path: 'user-mill-mapping', data: {breadcrumb: 'User Mill Mapping'}, component: UserMillMappingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPagesRoutingModule { }
