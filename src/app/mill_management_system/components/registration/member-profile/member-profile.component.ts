import { Component, OnInit } from '@angular/core';
import { MemberMaster } from 'src/app/mill_management_system/model/Member/member-master.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
import { MessageService } from 'primeng/api';
import { StateDistrictTaluka } from 'src/app/mill_management_system/model/StateDistrictTaluka/state-district-taluka.model';
import { SharedService } from 'src/app/mill_management_system/services/shared.service';
import { User } from 'src/app/mill_management_system/model/User';
@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
  providers: [MessageService]
})
export class MemberProfileComponent implements OnInit {
  memberMaster: MemberMaster = new MemberMaster();
  userData:User=new User();
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
    console.log(this.memberMaster.stateCode)
    this.stateDistrictTaluka.stateCode=this.memberMaster.stateCode;
    this.restService.post("/api/states/getStatesDistrictList",this.stateDistrictTaluka).subscribe((response) => {
      console.log("getStatesDistrictList Response", response);
      this.districtList=response;
    })
  }
  getTalukaOnChange() {
    // alert("hafsfh"+this.memberMaster.stateCode)
     console.log(this.memberMaster.stateCode)
     this.stateDistrictTaluka.stateCode=this.memberMaster.stateCode;
     this.stateDistrictTaluka.districtCode=this.memberMaster.districtCode;
     this.restService.post("/api/states/getStatesDistrictTalukaList",this.stateDistrictTaluka).subscribe((response) => {
       console.log("getStatesDistrictTalukaList Response", response);
       this.talukaList=response;
     })
   }
  ngOnInit() {
    this.getState();
   
  } 


  

  memberTypeList: any[] = [
    { name: 'State Agency', code: 'ST' },
    { name: 'District Agency', code: 'DT' },
    { name: 'GOVT CENTER', code: 'CT' },
    { name: 'GOVT WAREHOUSE', code: 'WH' },
    { name: 'FARMERS', code: 'FR' },
    { name: 'TRADER', code: 'TR' },
    { name: 'OTHERS', code: 'OR' }
  ];

  


  load(index: number) {
    //this.loading[index] = true;
    //setTimeout(() => this.loading[index] = false, 1000);
  }


  validateData(){
    if(this.memberMaster.memberName ==null || this.memberMaster.memberName ==undefined || this.memberMaster.memberName==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter The Member Name" });
      return false;
    }
    if(this.memberMaster.memberType ==null || this.memberMaster.memberType ==undefined || this.memberMaster.memberType==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select Member Type" });
      return false;
    }
    if(this.memberMaster.stateCode ==null || this.memberMaster.stateCode ==undefined || this.memberMaster.stateCode==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select State" });
      return false;
    }
    if(this.memberMaster.districtCode ==null || this.memberMaster.districtCode ==undefined || this.memberMaster.districtCode==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select district" });
      return false;
    }
    if(this.memberMaster.taluka ==null || this.memberMaster.taluka ==undefined || this.memberMaster.taluka==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Select taluka" });
      return false;
    }
    if(this.memberMaster.contactNo ==null || this.memberMaster.contactNo ==undefined || this.memberMaster.contactNo==""){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter Mobile No" });
      return false;
    }
    return true;
  }
  saveMemberMaster(){
   // alert("asds")
    if(this.validateData()){
          //let userDetails:string|any;
          // console.log(this.memberMaster)
           this.memberMaster.userId=localStorage.getItem("UserId");
        //   console.log(this.memberMaster);
           this.restService.post("/api/member/saveMembers",this.memberMaster).subscribe((response) => {
            //console.log("Season Response", response);
            if(response.status!=null && response.status ==200){
              this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
             this.resetMemberMaster();
          }else{
              this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
          }
      })
    }
  }
  resetMemberMaster(){
    this.memberMaster=new MemberMaster();
    // this.seasonMaster.seasonFinancialYear="";
    // this.seasonMaster.seasonId="";
    // this.seasonMaster.seasonName="";
  }
  

}
