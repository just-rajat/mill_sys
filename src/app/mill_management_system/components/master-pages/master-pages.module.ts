import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPagesRoutingModule } from './master-pages-routing.module';
import { SeasonMasterComponent } from './season-master/season-master.component';
import { CommodityMasterComponent } from './commodity-master/commodity-master.component';
import { MillMasterComponent } from './mill-master/mill-master.component';
import { CommodityConvMasterComponent } from './commodity-conv-master/commodity-conv-master.component';
import { CenterWhMasterComponent } from './center-wh-master/center-wh-master.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { UserMillMappingComponent } from './user-mill-mapping/user-mill-mapping.component';
//import { UppercaseDirective } from '../../_directive/uppercase.directive';

@NgModule({
  declarations: [
    SeasonMasterComponent,
    CommodityMasterComponent,
    MillMasterComponent,
    CommodityConvMasterComponent,
    CenterWhMasterComponent,
    UserMillMappingComponent,
    //UppercaseDirective
  ],
  imports: [
    CommonModule,
    MasterPagesRoutingModule,
    FormsModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
		InputTextareaModule,
    InputTextModule,
    AutoCompleteModule,
    ToastModule


  ]
})
export class MasterPagesModule { }
