import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { RegisterService } from 'src/app/mill_management_system/services/auth/register.service';
import { MessageService } from 'primeng/api';

@Component({
	templateUrl: './register.component.html',
    providers: [MessageService]
})
export class RegisterComponent {

	confirmed: boolean = false;
	selectedState: any = null;
	selectedDistrict: any = null;
    selectedTaluka: any = null;
    registrationDetails: any = {};

	constructor(private layoutService: LayoutService,
                private registerService: RegisterService,
                private messageService: MessageService) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

    register(registrationDetails: NgForm){
        console.log(registrationDetails)
        this.registerService.register(registrationDetails).subscribe(
            {
                next: (response: any) => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Organization Created Successfully !' });
                },
                error: (error) => {
					console.log(error);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Organization Creation Failed !' });
				}
            }
        )
    }

	statesList: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', code: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

	districtsList: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', code: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

	talukaList: any[] = [
        {name: 'Arizona', code: '01'},
        {name: 'California', code: '02'},
        {name: 'Florida', code: '03'},
        {name: 'Ohio', code: '04'},
        {name: 'Washington', code: '05'}
    ];
}
