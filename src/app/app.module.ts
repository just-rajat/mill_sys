import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './mill_management_system/auth/auth.guard';
import { AuthInterceptor } from './mill_management_system/auth/auth.interceptor';
import { LoginService } from './mill_management_system/services/auth/login.service';

@NgModule({
    declarations: [
        AppComponent,
 ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        RouterModule,
    ],
    providers: [
        { 
            provide: LocationStrategy, 
            useClass: HashLocationStrategy,
        },
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
