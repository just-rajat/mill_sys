import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserMaster } from 'src/app/mill_management_system/model/UserMaster/user-master.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';


@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss'],
  providers: [MessageService]
})
export class UserMasterComponent implements OnInit{

  userMaster: UserMaster = new UserMaster();

  ngOnInit() {
   this.userMaster.orgId=localStorage.getItem("orgId");
  }

  constructor(
    private restService: CommonService,
    private messageService: MessageService)  {}


 load(index: number) {
    //this.loading[index] = true;
    //setTimeout(() => this.loading[index] = false, 1000);
}

saveUserDetails(){

  if(this.validateData()){
   this.restService.post("/saveUserInOrg",this.userMaster).subscribe((response) => {
     //console.log("Season Response", response);
     if(response.status!=null && response.status ==200){
       this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
      this.reset();
   }else{
       this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
   }
})
}
}
validateData(){
  if(this.userMaster.orgId ==null || this.userMaster.orgId ==undefined || this.userMaster.orgId==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Org ID Mandetory !! Please logout then login  !" });
    return false;
  }
  if(this.userMaster.userId ==null || this.userMaster.userId ==undefined || this.userMaster.userId==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter User ID !" });
    return false;
  }
  if(this.userMaster.userName ==null || this.userMaster.userName ==undefined || this.userMaster.userName==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter User Name !" });
    return false;
  }
  if(this.userMaster.userPassword ==null || this.userMaster.userPassword ==undefined || this.userMaster.userPassword==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter Password !" });
    return false;
  }
  if(this.userMaster.userMobile ==null || this.userMaster.userMobile ==undefined || this.userMaster.userMobile==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Mobile Number !" });
    return false;
  }
  if(this.userMaster.userEmail ==null || this.userMaster.userEmail ==undefined || this.userMaster.userEmail==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter Email Id !" });
    return false;
  }
  if(this.userMaster.userAddress ==null || this.userMaster.userAddress ==undefined || this.userMaster.userAddress==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter Address !" });
    return false;
  }

  
  return true;
}
reset(){
  this.userMaster=new UserMaster();
  
}
restrictNonNumeric(event: KeyboardEvent) {
  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'];
  const isNumericInput = (event.key >= '0' && event.key <= '9') || allowedKeys.includes(event.key);

  if (!isNumericInput) {
      event.preventDefault();
  }
}
// memberList: any[] = [
//   { name: 'USER ONE', code: 'ST' },
//   { name: 'USER TWO', code: 'DT' },
//   { name: 'USER THREE', code: 'CT' },
//   { name: 'USER FOUR', code: 'FR' },
//   { name: 'USER FIVE', code: 'TR' },
//   { name: 'USER SIX', code: 'OR' }
// ];
}