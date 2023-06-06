import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { RegisterComponent } from './register.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        FormsModule,
        DropdownModule,
        CalendarModule,
        ToastModule,
        AppConfigModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule { }