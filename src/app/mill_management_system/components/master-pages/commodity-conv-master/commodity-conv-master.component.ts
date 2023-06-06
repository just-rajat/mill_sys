import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommodityConversion } from 'src/app/mill_management_system/model/ComConversion/commodityConversion.model.';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';


@Component({
  selector: 'app-commodity-conv-master',
  templateUrl: './commodity-conv-master.component.html',
  styleUrls: ['./commodity-conv-master.component.scss'],
  providers: [MessageService]
})
export class CommodityConvMasterComponent implements OnInit {

  commodityConversion: CommodityConversion = new CommodityConversion;

  constructor(
    private restService: CommonService,
    private messageService: MessageService) { }

    commodityListSource: any[] = [];
    commodityListConvt: any[] = [];
  disableOnSuccess: boolean = false;

  getCommodityListSource() {
    this.restService.get("/api/master/getCommodityListSource")
      .subscribe((response) => {
        this.commodityListSource = response;
      });
  }

  getCommodityListConvt() {
    this.restService.get("/api/master/getCommodityListConvt")
      .subscribe((response) => {
        this.commodityListConvt = response;
      });
  }

  ngOnInit() {
    this.getCommodityListSource();
    this.getCommodityListConvt();
  }

  load(index: number) {
  }
  getDecimalPattern(): string {
    // Replace 2 with the desired number of decimal places
    return '^\\d+(\\.\\d{1,2})?$';
  }
  saveComConversion() {

    if (this.validateData()) {
      this.commodityConversion.userId=localStorage.getItem("UserId");
      this.restService.post("/api/master/saveCommodityConv", this.commodityConversion).subscribe((response) => {
        if (response.status != null && response.status == 200) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: response.msg });
          this.disableOnSuccess = true;
        } else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: response.msg });
        }
      })
    }

  }
  validateData() {
    if (this.commodityConversion.sourceCommodityCode == null || this.commodityConversion.sourceCommodityCode == undefined || this.commodityConversion.sourceCommodityCode == "") {
      this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Select Source Commodity !" });
      return false;
    }
    if (this.commodityConversion.convCommodityCode == null || this.commodityConversion.convCommodityCode == undefined || this.commodityConversion.convCommodityCode == "") {
      this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Select Converted Commodity !" });
      return false;
    }
    if (this.commodityConversion.convPercent == null || this.commodityConversion.convPercent == undefined || this.commodityConversion.convPercent == "") {
      this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Enter Conversion Percentage !" });
      return false;
    }
    if (this.commodityConversion.hustPercent == null || this.commodityConversion.hustPercent == undefined || this.commodityConversion.hustPercent == "") {
      this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Enter Husk Percentage !" });
      return false;
    }
    if (this.commodityConversion.brokenPercent == null || this.commodityConversion.brokenPercent == undefined || this.commodityConversion.brokenPercent == "") {
      this.messageService.add({ severity: 'error', summary: 'Required', detail: "Please Enter Broken Percentage !" });
      return false;
    }
    return true;
  }
  resetForm() {
    this.commodityConversion = new CommodityConversion();
    this.disableOnSuccess = false;

  }

}
