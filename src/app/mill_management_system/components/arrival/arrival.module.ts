import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { ArrivalRoutingModule } from './arrival-routing.module';
import { MillArrivalComponent } from './mill-arrival/mill-arrival.component';
import { FormsModule } from '@angular/forms';
import { FormLayoutDemoRoutingModule } from 'src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ViewMillArrivalComponent } from './view-mill-arrival/view-mill-arrival.component';
import { TableDemoRoutingModule } from 'src/app/demo/components/uikit/table/tabledemo-routing.module';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';
import { AgdateRendererComponent } from './agdate-renderer/agdate-renderer.component';
import { MessageService } from 'primeng/api';
//import { UppercaseDirective } from '../../_directive/uppercase.directive';
//import { MobileNumberDirective } from '../../_directive/mobileNumber.directive';

@NgModule({
  imports: [
    CommonModule,
    ArrivalRoutingModule,
    ButtonModule,
		DropdownModule,
		FormsModule,
    FormsModule,
		FormLayoutDemoRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		TableDemoRoutingModule,
		TableModule,
		RatingModule,
		SliderModule,
		ToggleButtonModule,
		RippleModule,
		ProgressBarModule,
		ToastModule,
		AgGridModule,
		
  ],
  declarations: [
    MillArrivalComponent,
    ViewMillArrivalComponent,
    AgdateRendererComponent,
	//UppercaseDirective,
	//MobileNumberDirective 
  ],
  providers: [ MessageService ]
})
export class ArrivalModule { }
