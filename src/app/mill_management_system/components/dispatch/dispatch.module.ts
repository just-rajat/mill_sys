import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { MillDispatchComponent } from './mill-dispatch/mill-dispatch.component';
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
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
//import { UppercaseDirective } from '../../_directive/uppercase.directive';
//import { MobileNumberDirective } from '../../_directive/mobileNumber.directive';

@NgModule({
  imports: [
    CommonModule,
    DispatchRoutingModule,
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
		TableModule,
		ToastModule
  ],
  declarations: [
    MillDispatchComponent,
	//UppercaseDirective,
	//MobileNumberDirective
  ],
  providers: [ MessageService ]
})
export class DispatchModule { }
