import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommodityMaster } from 'src/app/mill_management_system/model/Masters/commodity-master.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
@Component({
  selector: 'app-commodity-master',
  templateUrl: './commodity-master.component.html',
  styleUrls: ['./commodity-master.component.scss'],
  providers: [MessageService]
})
export class CommodityMasterComponent implements OnInit{
  commodityMaster: CommodityMaster = new CommodityMaster();

  constructor(
    private restService: CommonService,
    private messageService: MessageService) {}
    

  ngOnInit() {
      
  }
  saveCommodty(){

    if(this.validateData()){
    this.commodityMaster.userId=localStorage.getItem("UserId");
     this.restService.post("/api/master/saveCommodity",this.commodityMaster).subscribe((response) => {
       //console.log("Season Response", response);
       if(response.status!=null && response.status ==200){
         this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg  });
        this.resetCommodty();
     }else{
         this.messageService.add({ severity: 'error', summary: 'Error', detail: response.msg });
     }
 })
    }
     
 }
 validateData(){
  if(this.commodityMaster.commodityType ==null || this.commodityMaster.commodityType ==undefined || this.commodityMaster.commodityType==""){
    this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Select Commodity Type" });
    return false;
  }
   if(this.commodityMaster.commodityGroup ==null || this.commodityMaster.commodityGroup ==undefined || this.commodityMaster.commodityGroup==""){
     this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Enter Commodity Group" });
     return false;
   }
   if(this.commodityMaster.commodityCode ==null || this.commodityMaster.commodityCode ==undefined || this.commodityMaster.commodityCode==""){
     this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Enter Commodity Code" });
     return false;
   }
   
   return true;
 }
 resetCommodty(){
   this.commodityMaster=new CommodityMaster();
   // this.commodityMaster.seasonFinancialYear="";
   // this.commodityMaster.seasonId="";
   // this.commodityMaster.seasonName="";
 }
 
 
 commodityTypeList: any[] = [
  { name: 'Source Commodity', code: 'S' },
  { name: 'Converted Commodity', code: 'C' }
];


  
}
