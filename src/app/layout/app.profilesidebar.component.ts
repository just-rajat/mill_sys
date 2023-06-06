import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { UserAuthService } from '../mill_management_system/services/auth/user-auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../mill_management_system/services/shared.service';


interface User {

    userId: string;
    orgId: string;
    userName: string;
    userCategory: string;
    userMobile: string;
    userEmail: string;
    userAddress: string;
    userFirstLogin: string;
    userIsActive: string;
    orgUserScope: string;
}

interface userData {
    user: User;
}

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent {


    constructor(public layoutService: LayoutService,
        private userAuthSerivce: UserAuthService,
        private sharedDataService: SharedService,
        private router: Router) { }

    public userName: string | undefined;
    private userData: userData | undefined;

    get visible(): boolean {
        return this.layoutService.state.profileSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.profileSidebarVisible = _val;
    }

    ngAfterContentChecked() {
        this.userData = this.sharedDataService.value;
        this.userName = this.userData?.user.userName;
      }

    signOut() {
        this.userAuthSerivce.clear();
        this.router.navigate(['/']);
        this.visible = false;
    }

}