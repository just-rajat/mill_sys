import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MillMaster } from 'src/app/mill_management_system/model/Masters/mill-master.model';
import { StateDistrictTaluka } from 'src/app/mill_management_system/model/StateDistrictTaluka/state-district-taluka.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
import { SharedService } from 'src/app/mill_management_system/services/shared.service';

@Component({
  selector: 'app-mill-master',
  templateUrl: './mill-master.component.html',
//   styleUrls: ['./mill_master.component.scss'],
  providers: [MessageService]
})




export class MillMasterComponent implements OnInit {
    millMaster: MillMaster = new MillMaster();
    stateDistrictTaluka:StateDistrictTaluka=new StateDistrictTaluka();
    constructor(
        private restService: CommonService,
        private messageService: MessageService,
        private sharedDataService: SharedService) { }
        stateList: any[] =[];
        districtList:any[]=[];
        talukaList:any[]=[];

  
        getState() {
            this.restService.get("/api/states/getStatesList").subscribe((response) => {
              console.log("getStatesList Response", response);
              this.stateList=response;
            })
          }
          getDistrictOnChange() {
           // alert("hafsfh"+this.memberMaster.stateCode)
            console.log(this.millMaster.stateCode)
            this.stateDistrictTaluka.stateCode=this.millMaster.stateCode;
            this.restService.post("/api/states/getStatesDistrictList",this.stateDistrictTaluka).subscribe((response) => {
              console.log("getStatesDistrictList Response", response);
              this.districtList=response;
            })
          }
          getTalukaOnChange() {
            // alert("hafsfh"+this.memberMaster.stateCode)
             console.log(this.millMaster.stateCode)
             this.stateDistrictTaluka.stateCode=this.millMaster.stateCode;
             this.stateDistrictTaluka.districtCode=this.millMaster.districtCode;
             this.restService.post("/api/states/getStatesDistrictTalukaList",this.stateDistrictTaluka).subscribe((response) => {
               console.log("getStatesDistrictTalukaList Response", response);
               this.talukaList=response;
             })
           }
          ngOnInit() {
            this.getState();
           
          } 

  
  load(index: number) {
    //this.loading[index] = true;
    //setTimeout(() => this.loading[index] = false, 1000);
}

validateData(){
    if(this.millMaster.millName ==null || this.millMaster.millName ==undefined || this.millMaster.millName==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter The Mill Name" });
      return false;
    }
    
    if(this.millMaster.stateCode ==null || this.millMaster.stateCode ==undefined || this.millMaster.stateCode==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select State" });
      return false;
    }
    if(this.millMaster.districtCode ==null || this.millMaster.districtCode ==undefined || this.millMaster.districtCode==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select district" });
      return false;
    }
    if(this.millMaster.talukaCode ==null || this.millMaster.talukaCode ==undefined || this.millMaster.talukaCode==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select taluka" });
      return false;
    }
    if(this.millMaster.millLocation ==null || this.millMaster.millLocation ==undefined || this.millMaster.millLocation==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter Mill Location" });
      return false;
    }
    return true;
  }

  saveMillMaster(){
    // alert("asds")
     if(this.validateData()){
           //let userDetails:string|any;
           // console.log(this.memberMaster)
            this.millMaster.userId=localStorage.getItem("UserId");
         //   console.log(this.memberMaster);
            this.restService.post("/api/master/saveMill",this.millMaster).subscribe((response) => {
             //console.log("Season Response", response);
             if(response.status!=null && response.status ==200){
               this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
              this.resetMillMaster();
           }else{
               this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
           }
       })
     }
   }
   resetMillMaster(){
     this.millMaster=new MillMaster();
    
   }
}
