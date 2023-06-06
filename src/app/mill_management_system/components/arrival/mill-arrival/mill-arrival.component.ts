import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, PostConstruct } from 'ag-grid-community';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { MillDepositDetails } from 'src/app/mill_management_system/model/arrival/mill-deposit-details.model';
import { MillDeposit } from 'src/app/mill_management_system/model/arrival/mill-deposit.model';
import { CommonService } from 'src/app/mill_management_system/services/api/common-rest.service';
import { AgdateRendererComponent } from '../agdate-renderer/agdate-renderer.component';

@Component({
    selector: 'app-mill-arrival',
    templateUrl: './mill-arrival.component.html',
    styleUrls: ['./mill-arrival.component.scss'],
})
export class MillArrivalComponent {

    //selectedState: any = null;
    //selecteddistrict: any = null;
    //selectedseasonID: any = null;
    //selectedcommodity: any = null;
    hideShowGovtFields: boolean = false;
    disableOnSuccess: boolean = false;
    millDeposit: MillDeposit = new MillDeposit();
    depositDetailsList: MillDepositDetails[] = []; 
    millDepositDetails: MillDepositDetails = new MillDepositDetails();
    allRowSelected: boolean = false;
    selectedRows: any[] = [];

    constructor(private messageService: MessageService,
        private restService: CommonService) {}

    ngOnInit() {
        // this.productService.getProducts().then((data: Product[]) => {
        //     this.products = data;
        // });

        this.addRow();
        this.getstatesList();
        this.getSeasonList();
        this.getCommodityList();
        this.getMillList();
    } 

    stockTypeList: any[] = [
        { name: 'Government', code: 'GOVT' },
        { name: 'Non - Government', code: 'NON-GOVT' },
    ];
        
    memberTypeList: any[] = [
        { name: 'Farmer', code: 'FR' },
        { name: 'Trader', code: 'TR' },
        { name: 'Others', code: 'OR' },
    ];
        
    statesList: any[] = [];
    stateAgencyList: any[] = [];
    districtAgencyList: any[] = [];
    centerList: any[] = [];
    seasonIDList: any[] = [];
    commodityList: any[] = [];
    millList: any[] = [];
    memberList: any[] = [];
    serialCount: number = 0;

    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
        { headerName: 'Arrival Date',
          field: 'arrivalDate',
          cellRenderer: AgdateRendererComponent,
        },
        { headerName: 'Quantity', field: 'quantity', editable: true},
        { headerName: 'Bags', field: 'bags', editable: true },
        { headerName: 'Transporter Name', field: 'transporterName', editable: true },
        { headerName: 'Vehicle No.', field: 'vehicleNo', editable: true },
        { headerName: 'Driver Name', field: 'driverName', editable: true },
        { headerName: 'Driver Mobile No.', field: 'driverMobileNo', editable: true },
        { headerName: 'Delivery Chalan No.', field: 'deliveryChalanNo', editable: true },
        {
          headerName: '',
          checkboxSelection: true,
          headerCheckboxSelection: true,
          pinned: 'left',
          width: 50,
          field: 'checkboxbtn',
        }
    ];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
    };

    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;
    //rowData: any[] = [];


    // Example load data from server
    onGridReady(params: GridReadyEvent) {
        /* this.rowData$ = this.http.get<any[]>(
            'https://www.ag-grid.com/example-assets/row-data.json'
        ); */
        this.addRow();
    }

    // Example of consuming Grid Event
    onCellClicked(e: CellClickedEvent): void {
        console.log('cellClicked', e);
    }

    // Example using Grid's API
    clearSelection(): void {
        //this.agGrid.api.deselectAll();
    }

    removeSelectedRows(): void {
        for (const row of this.selectedRows) {
          const index = this.depositDetailsList.indexOf(row);
          if (index !== -1) {
            this.depositDetailsList.splice(index, 1);
          }
        }
        this.selectedRows = [];
        this.calculateTotalQuantity();
        this.calculateTotalBags();
      }

    getSelectedRow(): void {
        console.log(this.selectedRows);
      }
    
    addRow() {
    //   this.agGrid.api.applyTransaction({ add: [{}] });
        if(this.serialCount == 0){
            this.depositDetailsList.push({
                serialNo: ++this.serialCount,
                arrivalDate: '',
                quantity: 0,
                noOfBags: 0,
                transporterName: '',
                vehicleNo: '',
                driverName: '',
                driverMobNo: '',
                deliveryChallanNo: '',
            });
        }else{
            if(this.validateMillDepositDetailsData()){
                this.depositDetailsList.push({
                    serialNo: ++this.serialCount,
                    arrivalDate: '',
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

    checkStockType(){
        if(this.millDeposit.stockType === "GOVT"){
            this.hideShowGovtFields = true;
            this.getStateAgencyList();
            this.getDistrictAgencyList();
            this.getCenterList();
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

    getCenterList(){
        this.restService.post("/api/member/getMembersList",{"memberType":"CT"})
        .subscribe((response) => {
            this.centerList = response;
        });
    }

    getMemberList(memberType: any){
        this.restService.post("/api/member/getMembersList",{"memberType":memberType})
        .subscribe((response) => {
            this.memberList = response;
        });
    }

    getCommodityList(){
        this.restService.get("/api/master/getCommodityListSource")
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
        this.millDeposit.financialYear = this.seasonIDList.find(seasonObj => seasonObj.seasonId === season).seasonFinancialYear;
    }

    validateMillDepositData(){
        if(this.millDeposit.stateCode == null || this.millDeposit.stateCode == undefined || this.millDeposit.stateCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "State is mandatory !!" });
            return false;
        }
        if(this.millDeposit.stockType == null || this.millDeposit.stockType == undefined || this.millDeposit.stockType == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Stock type is mandatory !!" });
            return false;
        }
        if(this.millDeposit.stockType == 'GOVT'){
            if(this.millDeposit.stateAgencyCode == null || this.millDeposit.stateAgencyCode == undefined || this.millDeposit.stateAgencyCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "State agency is mandatory !!" });
                return false;
            }
            if(this.millDeposit.districtAgencyCode == null || this.millDeposit.districtAgencyCode == undefined || this.millDeposit.districtAgencyCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "District agency is mandatory !!" });
                return false;
            }
            if(this.millDeposit.centerCode == null || this.millDeposit.centerCode == undefined || this.millDeposit.centerCode == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Center is mandatory !!" });
                return false;
            }    
        }else{
            if(this.millDeposit.memberType == null || this.millDeposit.memberType == undefined || this.millDeposit.memberType == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Member type is mandatory !!" });
                return false;
            }
            if(this.millDeposit.memberName == null || this.millDeposit.memberName == undefined || this.millDeposit.memberName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: "Member name is mandatory !!" });
                return false;
            }
        }
        if(this.millDeposit.seasonId == null || this.millDeposit.seasonId == undefined || this.millDeposit.seasonId == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Season is mandatory !!" });
            return false;
        }
        if(this.millDeposit.financialYear == null || this.millDeposit.financialYear == undefined || this.millDeposit.financialYear == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Financial year is mandatory !!" });
            return false;
        }
        if(this.millDeposit.commodityCode == null || this.millDeposit.commodityCode == undefined || this.millDeposit.commodityCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Commodity is mandatory !!" });
            return false;
        }
        if(this.millDeposit.millCode == null || this.millDeposit.millCode == undefined || this.millDeposit.millCode == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Mill is mandatory !!" });
            return false;
        }
        if(this.millDeposit.receiptNo == null || this.millDeposit.receiptNo == undefined || this.millDeposit.receiptNo == ''){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Receipt no. is mandatory !!" });
            return false;
        }
        if(this.millDeposit.totalQuantityReceived == null || this.millDeposit.totalQuantityReceived == undefined || this.millDeposit.totalQuantityReceived == 0){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Total received quantity is mandatory !!" });
            return false;
        }
        if(this.millDeposit.totalBagsReceived == null || this.millDeposit.totalBagsReceived == undefined || this.millDeposit.totalBagsReceived == 0){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Total bags received is mandatory !!" });
            return false;
        }
        return true;
    }

    validateMillDepositDetailsData():boolean{
        for(let i = 0; i < this.depositDetailsList.length; i++){
            if(this.depositDetailsList[i].serialNo == null || this.depositDetailsList[i].serialNo == undefined){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Serial no. is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].arrivalDate == null || this.depositDetailsList[i].arrivalDate == undefined || this.depositDetailsList[i].arrivalDate == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Arrival date is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].quantity == null || this.depositDetailsList[i].quantity == undefined || this.depositDetailsList[i].quantity == 0){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Quantity is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].noOfBags == null || this.depositDetailsList[i].noOfBags == undefined || this.depositDetailsList[i].noOfBags == 0){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `No. of bags is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].transporterName == null || this.depositDetailsList[i].transporterName == undefined || this.depositDetailsList[i].transporterName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Transporter name is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].vehicleNo == null || this.depositDetailsList[i].vehicleNo == undefined || this.depositDetailsList[i].vehicleNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Vehicle number is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].driverName == null || this.depositDetailsList[i].driverName == undefined || this.depositDetailsList[i].driverName == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Driver name is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].driverMobNo == null || this.depositDetailsList[i].driverMobNo == undefined || this.depositDetailsList[i].driverMobNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Driver mobile no. is mandatory for row number ${i+1} !!` });
                return false;
            }
            if(this.depositDetailsList[i].deliveryChallanNo == null || this.depositDetailsList[i].deliveryChallanNo == undefined || this.depositDetailsList[i].deliveryChallanNo == ''){
                this.messageService.add({ severity: 'error', summary: 'Error', detail: `Delivery challan no. is for row number ${i+1} mandatory !!` });
                return false;
            }
        }
        return true;
    }

    submitDeposit(){
        if(this.validateMillDepositData() && this.validateMillDepositDetailsData()){
            this.millDeposit.depositDetailsList = this.depositDetailsList;
            this.restService.post('/api/deposit/saveDeposit', this.millDeposit).subscribe((response) => {
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
        this.millDeposit = new MillDeposit();
        this.depositDetailsList = [];
        this.serialCount = 0;
        this.disableOnSuccess = false;
        this.addRow();
    }


    calculateTotalQuantity(): void {
        this.millDeposit.totalQuantityReceived = 0;
        if(this.depositDetailsList != null || this.depositDetailsList != undefined){
            for(let i=0; i<this.depositDetailsList.length; i++){
                this.millDeposit.totalQuantityReceived = this.millDeposit.totalQuantityReceived + this.depositDetailsList[i].quantity;
                console.log(this.millDeposit.totalQuantityReceived);
            }
            console.log(this.millDeposit.totalQuantityReceived);
        }
    }

    calculateTotalBags(): void {
        this.millDeposit.totalBagsReceived = 0;
        if(this.depositDetailsList != null || this.depositDetailsList != undefined){
            for(let i=0; i<this.depositDetailsList.length; i++){
                this.millDeposit.totalBagsReceived = this.millDeposit.totalBagsReceived + this.depositDetailsList[i].noOfBags;
                console.log(this.millDeposit.totalBagsReceived);    
            }
            console.log(this.millDeposit.totalBagsReceived);    
        }
      }

      

}
