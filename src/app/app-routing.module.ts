import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthGuard } from './mill_management_system/auth/auth.guard';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    { path: '', loadChildren: () => import('./mill_management_system/components/registration/login/login.module').then(m => m.LoginModule) },
    { path: 'millManagement', component: AppLayoutComponent, 
        children: [
            { path: 'dashboard', loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule), canActivate: [AuthGuard] },
            { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule), canActivate: [AuthGuard] },
            { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule), canActivate: [AuthGuard] },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule), canActivate: [AuthGuard] },
            { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule), canActivate: [AuthGuard] },
            { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('./demo/components/ecommerce/ecommerce.module').then(m => m.EcommerceModule), canActivate: [AuthGuard] },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./demo/components/apps/apps.module').then(m => m.AppsModule), canActivate: [AuthGuard] },
            { path: 'arrival',data: { breadcrumb: 'Deposit' }, loadChildren: () => import('./mill_management_system/components/arrival/arrival.module').then(m => m.ArrivalModule), canActivate: [AuthGuard] },
            { path: 'dispatch',data: { breadcrumb: 'Withdrawal' }, loadChildren: () => import('./mill_management_system/components/dispatch/dispatch.module').then(m => m.DispatchModule), canActivate: [AuthGuard] },
            { path: 'registration',data: { breadcrumb: 'Registration' }, loadChildren: () => import('./mill_management_system/components/registration/registration.module').then(m => m.RegistrationModule), canActivate: [AuthGuard] },        
            { path: 'master-pages', data:{ breadcrumb: 'Masters' }, loadChildren: () => import('./mill_management_system/components/master-pages/master-pages.module').then(m => m.MasterPagesModule), canActivate: [AuthGuard] }
        
        ]
    },
    { path: 'register', loadChildren: () => import('./mill_management_system/components/registration/register/register.module').then(m => m.RegisterModule)},
    // { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
