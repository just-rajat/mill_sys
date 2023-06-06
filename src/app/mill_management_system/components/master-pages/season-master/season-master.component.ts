import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SeasonMaster } from 'src/app/mill_management_system/model/Season/season-master.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-season-master',
  templateUrl: './season-master.component.html',
  styleUrls: ['./season-master.component.scss'],
  providers: [MessageService]
})
export class SeasonMasterComponent implements OnInit{
  
 seasonMaster: SeasonMaster = new SeasonMaster();

 constructor(
    private restService: CommonService,
    private messageService: MessageService) {}
    

  ngOnInit() {
      
  }

 
  load(index: number) {
    //this.loading[index] = true;
    //setTimeout(() => this.loading[index] = false, 1000);
}

saveSeason(){

   if(this.validateData()){
    this.restService.post("/saveUpdateSeason",this.seasonMaster).subscribe((response) => {
      //console.log("Season Response", response);
      if(response.status!=null && response.status ==200){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
       this.resetSeason();
    }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
    }
})
   }
    
}
validateData(){
  if(this.seasonMaster.seasonId ==null || this.seasonMaster.seasonId ==undefined || this.seasonMaster.seasonId==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter The Season Id" });
    return false;
  }
  if(this.seasonMaster.seasonName ==null || this.seasonMaster.seasonName ==undefined || this.seasonMaster.seasonName==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter The season Name" });
    return false;
  }
  if(this.seasonMaster.seasonFinancialYear ==null || this.seasonMaster.seasonFinancialYear ==undefined || this.seasonMaster.seasonFinancialYear==""){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Enter The Season Financial Year" });
    return false;
  }
  return true;
}
resetSeason(){
  this.seasonMaster=new SeasonMaster();
  // this.seasonMaster.seasonFinancialYear="";
  // this.seasonMaster.seasonId="";
  // this.seasonMaster.seasonName="";
}

}
