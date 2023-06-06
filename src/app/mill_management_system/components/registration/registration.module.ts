import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { RegistrationRoutingModule } from './registration-routing.module';
import { MemberProfileComponent } from './member-profile/member-profile.component';
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
import { ToastModule } from 'primeng/toast';
import { UserMasterComponent } from './user-master/user-master.component';
//import { UppercaseDirective } from '../../_directive/uppercase.directive';


@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
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
	ToastModule
  ],
  declarations: [
    MemberProfileComponent,
	UserMasterComponent,
	//UppercaseDirective
  ]
})
export class RegistrationModule { }
