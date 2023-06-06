import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { userMillMapping } from 'src/app/mill_management_system/model/userMillMapping/user-mill-mapping.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';

@Component({
  selector: 'app-user-mill-mapping',
  templateUrl: './user-mill-mapping.component.html',
  styleUrls: ['./user-mill-mapping.component.scss'],
  providers: [MessageService]
})
export class UserMillMappingComponent implements OnInit {
  
  userMillMapping: userMillMapping = new userMillMapping();
  
  constructor(
    private restService: CommonService,
    private messageService: MessageService) {}
    userList:any[]=[];
    millList:any[]=[];
  
  ngOnInit() {
    this.getUserList();
    this.getMillList();
  }
  getUserList() {
     this.restService.post("/api/master/getUserList",this.userMillMapping).subscribe((response) => {
       console.log("getUserList Response", response);
       this.userList=response;
     })
   }
   getMillList() {
    this.restService.get("/api/master/getMillList").subscribe((response) => {
      console.log("getMillList Response", response);
      this.millList=response;
    })
  }
  saveMapping(){

    if(this.validateData()){
      this.userMillMapping.createdBy=localStorage.getItem("UserId");
     this.restService.post("/api/master/saveUserMillMapping",this.userMillMapping).subscribe((response) => {
       //console.log("Season Response", response);
       if(response.status!=null && response.status ==200){
         this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
        this.resetMapping();
     }else{
         this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
     }
 })
}
}
validateData(){
      if(this.userMillMapping.userId ==null || this.userMillMapping.userId ==undefined || this.userMillMapping.userId==""){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select User Id" });
        return false;
      }
      if(this.userMillMapping.millCode ==null || this.userMillMapping.millCode ==undefined || this.userMillMapping.millCode==""){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select Mill" });
        return false;
      }
      
      return true;
    }

   resetMapping() {
      this.userMillMapping=new userMillMapping();
    }

}

