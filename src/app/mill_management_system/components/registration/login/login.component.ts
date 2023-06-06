import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from 'src/app/mill_management_system/services/auth/login.service';
import { UserAuthService } from 'src/app/mill_management_system/services/auth/user-auth.service';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/mill_management_system/services/shared.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [MessageService]
})
export class LoginComponent {

	rememberMe: boolean = false;
	loginDetails: any = {};

	constructor(private layoutService: LayoutService,
		private loginService: LoginService,
		private userAuthService: UserAuthService,
		private messageService: MessageService,
		private sharedDataService: SharedService,
		private router: Router) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

	login(loginDetails: NgForm){
		console.log(loginDetails);
		this.loginService.login(loginDetails).subscribe(
			{
				next: (response: any) => {
					console.log(response);
					//this.userAuthService.setRoles(response.user.roles);
					this.userAuthService.setToken(response.jwtToken);
					// if(response.user.role.length > 0){
					// 	this.router.navigate(['/millManagement/dashboard']);
					// }
					if(response.jwtToken!=null && response.jwtToken.length > 0){
						this.router.navigate(['/millManagement/dashboard']);
						this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged In Successfully !' });
						this.sharedDataService.updateData(response);
						localStorage.setItem("UserId",response.user.userId);
						localStorage.setItem("orgId",response.user.orgId);
					}else{
						this.messageService.add({ severity: 'error', summary: 'Error', detail: response.responseMessage });
					}
					
				},
				error: (error) => {
					console.log(error)
					this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials !' });
				}
			}
		);
	}
}
