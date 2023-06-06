import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MillWithdrawalDetails } from 'src/app/mill_management_system/model/withdrawal/mill-withdrawal-details.model';
import { MillWithdrawal } from 'src/app/mill_management_system/model/withdrawal/mill-withdrawal.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
@Component({
  selector: 'app-mill-dispatch',
  templateUrl: './mill-dispatch.component.html',
  styleUrls: ['./mill-dispatch.component.scss']
})
export class MillDispatchComponent {
  
    constructor(private messageService: MessageService,
        private restService: CommonService) {}

    ngOnInit(){
        this.addRow();
        this.getstatesList();
        this.getSeasonList();
        this.getCommodityList();
        this.getMillList();
    }

    millWithdrawal: MillWithdrawal = new MillWithdrawal();
    withdrawalDetailsList: MillWithdrawalDetails[] = [];
    millWithdrawalDetails: MillWithdrawalDetails = new MillWithdrawalDetails();

    statesList: any[] = [];
    stateAgencyList: any[] = [];
    districtAgencyList: any[] = [];
    warehouseList: any[] = [];
    seasonIDList: any[] = [];
    commodityList: any[] = [];
    millList: any[] = [];
    memberList: any[] = [];
    serialCount: number = 0; 
    selectedRows: any[] = [];
    hideShowGovtFields: boolean = false;
    disableOnSuccess: boolean = false;

    stockTypeList: any[] = [
        { name: 'Government', code: 'GOVT' },
        { name: 'Non - Government', code: 'NON-GOVT' },
    ];
        
    memberTypeList: any[] = [
        { name: 'Farmer', code: 'FR' },
        { name: 'Trader', code: 'TR' },
        { name: 'Others', code: 'OR' },
    ];

    checkStockType(){
        if(this.millWithdrawal.stockType === "GOVT"){
            this.hideShowGovtFields = true;
            this.getStateAgencyList();
            this.getDistrictAgencyList();
            this.getWarehouseList();
        }else{
            this.hideShowGovtFields = false;
        }
    }

    getstatesList(){
        this.restService.get("/api/states/getStatesList")
        .subscribe((response) => {
            this.statesList = response;
            console.log(this.statesList);
            
        });
    }

    getStateAgencyList(){
        this.restService.post("/api/member/getMembersList",{"memberType":"ST"})
        .subscribe((response) => {
            this.stateAgencyList = response;
        });
    }

    getDistrictAgencyList(){
        this.restService.post("/api/member/getMembersList",{"memberType":"DT"})
        .subscribe((response) => {
            this.districtAgencyList = response;
        });
    }

    getWarehouseList(){
        this.restService.post("/api/member/getMembersList",{"memberType":"WH"})
        .subscribe((response) => {
            this.warehouseList = response;
        });
    }

    getMemberList(memberType: any){
        this.restService.post("/api/member/getMembersList",{"memberType": memberType})
        .subscribe((response) => {
            this.memberList = response;
        });
    }

    getCommodityList(){
        this.restService.get("/api/master/getCommodityListConvt")
        .subscribe((response) => {
            this.commodityList = response;
        });
    }

    getSeasonList(){
        this.restService.get("/getAllSeasonList")
        .subscribe((response) => {
            this.seasonIDList = response;
        });
    }

    getMillList(){
        this.restService.get("/api/master/getMillList")
        .subscribe((response) => {
            this.millList = response;
        });
    }

    getFinancialYear(season: any){
        this.millWithdrawal.financialYear = this.seasonIDList.find(seasonObj => seasonObj.seasonId === season).seasonFinancialYear;
    }

    validatemillWithdrawalData(){
        if(this.millWithdrawal.stateCode == null || this.millWithdrawal.stateCode == undefined || this.millWithdrawal.stateCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "State is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.stockType == null || this.millWithdrawal.stockType == undefined || this.millWithdrawal.stockType == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Stock type is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.stockType == 'GOVT'){
            if(this.millWithdrawal.stateAgencyCode == null || this.millWithdrawal.stateAgencyCode == undefined || this.millWithdrawal.stateAgencyCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "State agency is mandatory !!" });
                return false;
            }
            if(this.millWithdrawal.districtAgencyCode == null || this.millWithdrawal.districtAgencyCode == undefined || this.millWithdrawal.districtAgencyCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "District agency is mandatory !!" });
                return false;
            }
            if(this.millWithdrawal.centerCode == null || this.millWithdrawal.centerCode == undefined || this.millWithdrawal.centerCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Center is mandatory !!" });
                return false;
            }    
        }else{
            if(this.millWithdrawal.memberType == null || this.millWithdrawal.memberType == undefined || this.millWithdrawal.memberType == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Member type is mandatory !!" });
                return false;
            }
            if(this.millWithdrawal.memberName == null || this.millWithdrawal.memberName == undefined || this.millWithdrawal.memberName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Member name is mandatory !!" });
                return false;
            }
        }
        if(this.millWithdrawal.seasonId == null || this.millWithdrawal.seasonId == undefined || this.millWithdrawal.seasonId == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Season is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.financialYear == null || this.millWithdrawal.financialYear == undefined || this.millWithdrawal.financialYear == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Financial year is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.commodityCode == null || this.millWithdrawal.commodityCode == undefined || this.millWithdrawal.commodityCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Commodity is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.millCode == null || this.millWithdrawal.millCode == undefined || this.millWithdrawal.millCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Mill is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.receiptNo == null || this.millWithdrawal.receiptNo == undefined || this.millWithdrawal.receiptNo == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Receipt no. is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.totalQuantityWithdrew == null || this.millWithdrawal.totalQuantityWithdrew == undefined || this.millWithdrawal.totalQuantityWithdrew == 0){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Total received quantity is mandatory !!" });
            return false;
        }
        if(this.millWithdrawal.totalBagsWithdrew == null || this.millWithdrawal.totalBagsWithdrew == undefined || this.millWithdrawal.totalBagsWithdrew == 0){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Total bags received is mandatory !!" });
            return false;
        }
        return true;
    }

    validatemillWithdrawalDetailsData():boolean{
        for(let i = 0; i < this.withdrawalDetailsList.length; i++){
            if(this.withdrawalDetailsList[i].serialNo == null || this.withdrawalDetailsList[i].serialNo == undefined){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Serial no. is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].withdrawalDate == null || this.withdrawalDetailsList[i].withdrawalDate == undefined || this.withdrawalDetailsList[i].withdrawalDate == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Arrival date is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].quantity == null || this.withdrawalDetailsList[i].quantity == undefined || this.withdrawalDetailsList[i].quantity == 0){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Quantity is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].noOfBags == null || this.withdrawalDetailsList[i].noOfBags == undefined || this.withdrawalDetailsList[i].noOfBags == 0){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `No. of bags is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].transporterName == null || this.withdrawalDetailsList[i].transporterName == undefined || this.withdrawalDetailsList[i].transporterName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Transporter name is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].vehicleNo == null || this.withdrawalDetailsList[i].vehicleNo == undefined || this.withdrawalDetailsList[i].vehicleNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Vehicle number is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].driverName == null || this.withdrawalDetailsList[i].driverName == undefined || this.withdrawalDetailsList[i].driverName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Driver name is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].driverMobNo == null || this.withdrawalDetailsList[i].driverMobNo == undefined || this.withdrawalDetailsList[i].driverMobNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Driver mobile no. is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.withdrawalDetailsList[i].deliveryChallanNo == null || this.withdrawalDetailsList[i].deliveryChallanNo == undefined || this.withdrawalDetailsList[i].deliveryChallanNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Delivery challan no. is for row number ${i+1} mandatory !!` });
                return false;
            }
        }
        return true;
    }

    calculateTotalQuantity(): void {
        this.millWithdrawal.totalQuantityWithdrew = 0;
        if(this.withdrawalDetailsList != null || this.withdrawalDetailsList != undefined){
            for(let i=0; i<this.withdrawalDetailsList.length; i++){
                this.millWithdrawal.totalQuantityWithdrew = this.millWithdrawal.totalQuantityWithdrew + this.withdrawalDetailsList[i].quantity;
            }
        }
    }

    calculateTotalBags(): void {
        this.millWithdrawal.totalBagsWithdrew = 0;
        if(this.withdrawalDetailsList != null || this.withdrawalDetailsList != undefined){
            for(let i=0; i<this.withdrawalDetailsList.length; i++){
                this.millWithdrawal.totalBagsWithdrew = this.millWithdrawal.totalBagsWithdrew + this.withdrawalDetailsList[i].noOfBags;
            }
        }
      }

    addRow() {
        if(this.serialCount == 0){
            this.withdrawalDetailsList.push({
                serialNo: ++this.serialCount,
                withdrawalDate: '',
                quantity: 0,
                noOfBags: 0,
                transporterName: '',
                vehicleNo: '',
                driverName: '',
                driverMobNo: '',
                deliveryChallanNo: '',
            });
        }else{
            if(this.validatemillWithdrawalDetailsData()){
                this.withdrawalDetailsList.push({
                    serialNo: ++this.serialCount,
                    withdrawalDate: '',
                    quantity: 0,
                    noOfBags: 0,
                    transporterName: '',
                    vehicleNo: '',
                    driverName: '',
                    driverMobNo: '',
                    deliveryChallanNo: '',
                });
            }
        }
    }

    removeSelectedRows(): void {
        for (const row of this.selectedRows) {
          const index = this.withdrawalDetailsList.indexOf(row);
          if (index !== -1) {
            this.withdrawalDetailsList.splice(index, 1);
          }
        }
        this.selectedRows = [];
        this.calculateTotalQuantity();
        this.calculateTotalBags();
    }

    submitDeposit(){
        if(this.validatemillWithdrawalData() && this.validatemillWithdrawalDetailsData()){
            this.millWithdrawal.withdrawalDetailsList = this.withdrawalDetailsList;
            this.restService.post('/api/withdrawal/saveWithdrawal', this.millWithdrawal).subscribe((response) => {
                if(!response.isError){
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: response.responseMessage });
                    this.disableOnSuccess = true;
                }else{
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: response.responseMessage });
                }
            });
        }
    }

    reset(){
        this.millWithdrawal = new MillWithdrawal();
        this.withdrawalDetailsList = [];
        this.serialCount = 0;
        this.disableOnSuccess = false;
        this.addRow();
    }
}
