"use strict";(self.webpackChunkmill_sys=self.webpackChunkmill_sys||[]).push([[4449],{4449:(I,u,n)=>{n.r(u),n.d(u,{DispatchModule:()=>G});var c=n(6895),g=n(5593),m=n(2210),w=n(6957);class M{constructor(){this.noOfBags=0,this.quantity=0}}class _{constructor(){this.totalQuantityWithdrew=0,this.totalBagsWithdrew=0}}var e=n(1571),p=n(805),v=n(8739),d=n(433),f=n(585),y=n(1740),h=n(99),C=n(2453);function b(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3)(2,"p-dropdown",24),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.millWithdrawal.stateAgencyCode=a)}),e.qZA(),e.TgZ(3,"label",5),e._uU(4,"State Agency"),e.TgZ(5,"span",6),e._uU(6," *"),e.qZA()()()()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("autoDisplayFirst",!1)("options",t.stateAgencyList)("ngModel",t.millWithdrawal.stateAgencyCode)("filter",!0)("disabled",t.disableOnSuccess)}}function T(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3)(2,"p-dropdown",24),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.millWithdrawal.districtAgencyCode=a)}),e.qZA(),e.TgZ(3,"label",5),e._uU(4,"District Agency"),e.TgZ(5,"span",6),e._uU(6," *"),e.qZA()()()()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("autoDisplayFirst",!1)("options",t.districtAgencyList)("ngModel",t.millWithdrawal.districtAgencyCode)("filter",!0)("disabled",t.disableOnSuccess)}}function D(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3)(2,"p-dropdown",24),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.millWithdrawal.centerCode=a)}),e.qZA(),e.TgZ(3,"label",5),e._uU(4,"Warehouse"),e.TgZ(5,"span",6),e._uU(6," *"),e.qZA()()()()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("autoDisplayFirst",!1)("options",t.warehouseList)("ngModel",t.millWithdrawal.centerCode)("filter",!0)("disabled",t.disableOnSuccess)}}function W(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3)(2,"p-dropdown",7),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.millWithdrawal.memberType=a)})("onChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.getMemberList(a.millWithdrawal.memberType))}),e.qZA(),e.TgZ(3,"label",5),e._uU(4,"Member Type"),e.TgZ(5,"span",6),e._uU(6," *"),e.qZA()()()()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("autoDisplayFirst",!1)("options",t.memberTypeList)("ngModel",t.millWithdrawal.memberType)("disabled",t.disableOnSuccess)}}function Z(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",2)(1,"span",3)(2,"p-dropdown",24),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.millWithdrawal.memberName=a)}),e.qZA(),e.TgZ(3,"label",5),e._uU(4,"Member Name"),e.TgZ(5,"span",6),e._uU(6," *"),e.qZA()()()()}if(2&l){const t=e.oxw();e.xp6(2),e.Q6J("autoDisplayFirst",!1)("options",t.memberList)("ngModel",t.millWithdrawal.memberName)("filter",!0)("disabled",t.disableOnSuccess)}}function N(l,o){1&l&&(e.TgZ(0,"tr")(1,"th",25),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",26),e._uU(4,"Sr No."),e.qZA(),e.TgZ(5,"th",26),e._uU(6,"Arrival Date"),e.qZA(),e.TgZ(7,"th",26),e._uU(8,"Quantity"),e.qZA(),e.TgZ(9,"th",26),e._uU(10,"Bags"),e.qZA(),e.TgZ(11,"th",26),e._uU(12,"Transporter Name"),e.qZA(),e.TgZ(13,"th",26),e._uU(14,"Vehicle No."),e.qZA(),e.TgZ(15,"th",26),e._uU(16,"Driver Name"),e.qZA(),e.TgZ(17,"th",26),e._uU(18,"Driver Mobile No."),e.qZA(),e.TgZ(19,"th",26),e._uU(20,"Delivery Chalan No."),e.qZA()())}function L(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",27),e.qZA(),e.TgZ(3,"td")(4,"input",28),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.serialNo=a)}),e.qZA()(),e.TgZ(5,"td")(6,"p-calendar",29),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.withdrawalDate=a)}),e.qZA()(),e.TgZ(7,"td")(8,"input",30),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.quantity=a)})("blur",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.calculateTotalQuantity())}),e.qZA()(),e.TgZ(9,"td")(10,"input",30),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.noOfBags=a)})("blur",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.calculateTotalBags())}),e.qZA()(),e.TgZ(11,"td")(12,"input",31),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.transporterName=a)}),e.qZA()(),e.TgZ(13,"td")(14,"input",31),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.vehicleNo=a)}),e.qZA()(),e.TgZ(15,"td")(16,"input",31),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.driverName=a)}),e.qZA()(),e.TgZ(17,"td")(18,"input",32),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.driverMobNo=a)}),e.qZA()(),e.TgZ(19,"td")(20,"input",31),e.NdJ("ngModelChange",function(a){const r=e.CHM(t).$implicit;return e.KtG(r.deliveryChallanNo=a)}),e.qZA()()()}if(2&l){const t=o.$implicit,i=e.oxw();e.xp6(2),e.Q6J("value",t)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.serialNo),e.xp6(2),e.Q6J("ngModel",t.withdrawalDate)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.quantity)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.noOfBags)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.transporterName)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.vehicleNo)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.driverName)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.driverMobNo)("disabled",i.disableOnSuccess),e.xp6(2),e.Q6J("ngModel",t.deliveryChallanNo)("disabled",i.disableOnSuccess)}}const S=function(){return{"min-width":"50rem"}};let A=(()=>{class l{constructor(t,i){this.messageService=t,this.restService=i,this.millWithdrawal=new _,this.withdrawalDetailsList=[],this.millWithdrawalDetails=new M,this.statesList=[],this.stateAgencyList=[],this.districtAgencyList=[],this.warehouseList=[],this.seasonIDList=[],this.commodityList=[],this.millList=[],this.memberList=[],this.serialCount=0,this.selectedRows=[],this.hideShowGovtFields=!1,this.disableOnSuccess=!1,this.stockTypeList=[{name:"Government",code:"GOVT"},{name:"Non - Government",code:"NON-GOVT"}],this.memberTypeList=[{name:"Farmer",code:"FR"},{name:"Trader",code:"TR"},{name:"Others",code:"OR"}]}ngOnInit(){this.addRow(),this.getstatesList(),this.getSeasonList(),this.getCommodityList(),this.getMillList()}checkStockType(){"GOVT"===this.millWithdrawal.stockType?(this.hideShowGovtFields=!0,this.getStateAgencyList(),this.getDistrictAgencyList(),this.getWarehouseList()):this.hideShowGovtFields=!1}getstatesList(){this.restService.get("/api/states/getStatesList").subscribe(t=>{this.statesList=t,console.log(this.statesList)})}getStateAgencyList(){this.restService.post("/api/member/getMembersList",{memberType:"ST"}).subscribe(t=>{this.stateAgencyList=t})}getDistrictAgencyList(){this.restService.post("/api/member/getMembersList",{memberType:"DT"}).subscribe(t=>{this.districtAgencyList=t})}getWarehouseList(){this.restService.post("/api/member/getMembersList",{memberType:"WH"}).subscribe(t=>{this.warehouseList=t})}getMemberList(t){this.restService.post("/api/member/getMembersList",{memberType:t}).subscribe(i=>{this.memberList=i})}getCommodityList(){this.restService.get("/api/master/getCommodityListConvt").subscribe(t=>{this.commodityList=t})}getSeasonList(){this.restService.get("/getAllSeasonList").subscribe(t=>{this.seasonIDList=t})}getMillList(){this.restService.get("/api/master/getMillList").subscribe(t=>{this.millList=t})}getFinancialYear(t){this.millWithdrawal.financialYear=this.seasonIDList.find(i=>i.seasonId===t).seasonFinancialYear}validatemillWithdrawalData(){if(null==this.millWithdrawal.stateCode||null==this.millWithdrawal.stateCode||""==this.millWithdrawal.stateCode)return this.messageService.add({severity:"error",summary:"Error",detail:"State is mandatory !!"}),!1;if(null==this.millWithdrawal.stockType||null==this.millWithdrawal.stockType||""==this.millWithdrawal.stockType)return this.messageService.add({severity:"error",summary:"Error",detail:"Stock type is mandatory !!"}),!1;if("GOVT"==this.millWithdrawal.stockType){if(null==this.millWithdrawal.stateAgencyCode||null==this.millWithdrawal.stateAgencyCode||""==this.millWithdrawal.stateAgencyCode)return this.messageService.add({severity:"error",summary:"Error",detail:"State agency is mandatory !!"}),!1;if(null==this.millWithdrawal.districtAgencyCode||null==this.millWithdrawal.districtAgencyCode||""==this.millWithdrawal.districtAgencyCode)return this.messageService.add({severity:"error",summary:"Error",detail:"District agency is mandatory !!"}),!1;if(null==this.millWithdrawal.centerCode||null==this.millWithdrawal.centerCode||""==this.millWithdrawal.centerCode)return this.messageService.add({severity:"error",summary:"Error",detail:"Center is mandatory !!"}),!1}else{if(null==this.millWithdrawal.memberType||null==this.millWithdrawal.memberType||""==this.millWithdrawal.memberType)return this.messageService.add({severity:"error",summary:"Error",detail:"Member type is mandatory !!"}),!1;if(null==this.millWithdrawal.memberName||null==this.millWithdrawal.memberName||""==this.millWithdrawal.memberName)return this.messageService.add({severity:"error",summary:"Error",detail:"Member name is mandatory !!"}),!1}return null==this.millWithdrawal.seasonId||null==this.millWithdrawal.seasonId||""==this.millWithdrawal.seasonId?(this.messageService.add({severity:"error",summary:"Error",detail:"Season is mandatory !!"}),!1):null==this.millWithdrawal.financialYear||null==this.millWithdrawal.financialYear||""==this.millWithdrawal.financialYear?(this.messageService.add({severity:"error",summary:"Error",detail:"Financial year is mandatory !!"}),!1):null==this.millWithdrawal.commodityCode||null==this.millWithdrawal.commodityCode||""==this.millWithdrawal.commodityCode?(this.messageService.add({severity:"error",summary:"Error",detail:"Commodity is mandatory !!"}),!1):null==this.millWithdrawal.millCode||null==this.millWithdrawal.millCode||""==this.millWithdrawal.millCode?(this.messageService.add({severity:"error",summary:"Error",detail:"Mill is mandatory !!"}),!1):null==this.millWithdrawal.receiptNo||null==this.millWithdrawal.receiptNo||""==this.millWithdrawal.receiptNo?(this.messageService.add({severity:"error",summary:"Error",detail:"Receipt no. is mandatory !!"}),!1):null==this.millWithdrawal.totalQuantityWithdrew||null==this.millWithdrawal.totalQuantityWithdrew||0==this.millWithdrawal.totalQuantityWithdrew?(this.messageService.add({severity:"error",summary:"Error",detail:"Total received quantity is mandatory !!"}),!1):null!=this.millWithdrawal.totalBagsWithdrew&&null!=this.millWithdrawal.totalBagsWithdrew&&0!=this.millWithdrawal.totalBagsWithdrew||(this.messageService.add({severity:"error",summary:"Error",detail:"Total bags received is mandatory !!"}),!1)}validatemillWithdrawalDetailsData(){for(let t=0;t<this.withdrawalDetailsList.length;t++){if(null==this.withdrawalDetailsList[t].serialNo||null==this.withdrawalDetailsList[t].serialNo)return this.messageService.add({severity:"error",summary:"Error",detail:`Serial no. is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].withdrawalDate||null==this.withdrawalDetailsList[t].withdrawalDate||""==this.withdrawalDetailsList[t].withdrawalDate)return this.messageService.add({severity:"error",summary:"Error",detail:`Arrival date is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].quantity||null==this.withdrawalDetailsList[t].quantity||0==this.withdrawalDetailsList[t].quantity)return this.messageService.add({severity:"error",summary:"Error",detail:`Quantity is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].noOfBags||null==this.withdrawalDetailsList[t].noOfBags||0==this.withdrawalDetailsList[t].noOfBags)return this.messageService.add({severity:"error",summary:"Error",detail:`No. of bags is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].transporterName||null==this.withdrawalDetailsList[t].transporterName||""==this.withdrawalDetailsList[t].transporterName)return this.messageService.add({severity:"error",summary:"Error",detail:`Transporter name is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].vehicleNo||null==this.withdrawalDetailsList[t].vehicleNo||""==this.withdrawalDetailsList[t].vehicleNo)return this.messageService.add({severity:"error",summary:"Error",detail:`Vehicle number is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].driverName||null==this.withdrawalDetailsList[t].driverName||""==this.withdrawalDetailsList[t].driverName)return this.messageService.add({severity:"error",summary:"Error",detail:`Driver name is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].driverMobNo||null==this.withdrawalDetailsList[t].driverMobNo||""==this.withdrawalDetailsList[t].driverMobNo)return this.messageService.add({severity:"error",summary:"Error",detail:`Driver mobile no. is mandatory for row number ${t+1} !!`}),!1;if(null==this.withdrawalDetailsList[t].deliveryChallanNo||null==this.withdrawalDetailsList[t].deliveryChallanNo||""==this.withdrawalDetailsList[t].deliveryChallanNo)return this.messageService.add({severity:"error",summary:"Error",detail:`Delivery challan no. is for row number ${t+1} mandatory !!`}),!1}return!0}calculateTotalQuantity(){if(this.millWithdrawal.totalQuantityWithdrew=0,null!=this.withdrawalDetailsList||null!=this.withdrawalDetailsList)for(let t=0;t<this.withdrawalDetailsList.length;t++)this.millWithdrawal.totalQuantityWithdrew=this.millWithdrawal.totalQuantityWithdrew+this.withdrawalDetailsList[t].quantity}calculateTotalBags(){if(this.millWithdrawal.totalBagsWithdrew=0,null!=this.withdrawalDetailsList||null!=this.withdrawalDetailsList)for(let t=0;t<this.withdrawalDetailsList.length;t++)this.millWithdrawal.totalBagsWithdrew=this.millWithdrawal.totalBagsWithdrew+this.withdrawalDetailsList[t].noOfBags}addRow(){(0==this.serialCount||this.validatemillWithdrawalDetailsData())&&this.withdrawalDetailsList.push({serialNo:++this.serialCount,withdrawalDate:"",quantity:0,noOfBags:0,transporterName:"",vehicleNo:"",driverName:"",driverMobNo:"",deliveryChallanNo:""})}removeSelectedRows(){for(const t of this.selectedRows){const i=this.withdrawalDetailsList.indexOf(t);-1!==i&&this.withdrawalDetailsList.splice(i,1)}this.selectedRows=[],this.calculateTotalQuantity(),this.calculateTotalBags()}submitDeposit(){this.validatemillWithdrawalData()&&this.validatemillWithdrawalDetailsData()&&(this.millWithdrawal.withdrawalDetailsList=this.withdrawalDetailsList,this.restService.post("/api/withdrawal/saveWithdrawal",this.millWithdrawal).subscribe(t=>{t.isError?this.messageService.add({severity:"error",summary:"Error",detail:t.responseMessage}):(this.messageService.add({severity:"success",summary:"Success",detail:t.responseMessage}),this.disableOnSuccess=!0)}))}reset(){this.millWithdrawal=new _,this.withdrawalDetailsList=[],this.serialCount=0,this.disableOnSuccess=!1,this.addRow()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(p.ez),e.Y36(v.v))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-mill-dispatch"]],decls:83,vars:41,consts:[[1,"card"],[1,"grid","p-fluid","mt-3"],[1,"field","col-12","md:col-4"],[1,"p-float-label"],["inputId","dropdown","optionLabel","stateName","optionValue","stateCode","filterBy","stateName",3,"autoDisplayFirst","options","ngModel","filter","disabled","ngModelChange"],["for","dropdown"],[1,"required-field",2,"color","red"],["inputId","dropdown","optionLabel","name","optionValue","code",3,"autoDisplayFirst","options","ngModel","disabled","ngModelChange","onChange"],["class","field col-12 md:col-4",4,"ngIf"],["inputId","dropdown","optionLabel","seasonName","optionValue","seasonId","filterBy","seasonName",3,"autoDisplayFirst","options","ngModel","filter","disabled","ngModelChange","onChange"],["type","text","id","inputtext","pInputText","","disabled","true",3,"ngModel","ngModelChange"],["for","inputtext"],["inputId","dropdown","optionLabel","commodityCode","optionValue","commodityCode","filterBy","commodityCode",3,"autoDisplayFirst","options","ngModel","filter","disabled","ngModelChange"],["inputId","dropdown","optionLabel","millName","optionValue","millCode","filterBy","millName",3,"autoDisplayFirst","options","ngModel","filter","disabled","ngModelChange"],["type","text","id","inputtext","pInputText","",3,"ngModel","disabled","ngModelChange"],[1,"field","grid","flex","flex-wrap","gap-2",2,"display","flex","justify-content","flex-end"],["label","Submit","icon","pi pi-check",3,"onClick"],["label","Reset","icon","pi pi-refresh","styleClass","p-button-danger",3,"onClick"],[1,"field","grid","flex","flex-wrap","gap-2",2,"display","flex","justify-content","flex-start"],["label","Add Row","icon","pi pi-check",3,"onClick"],["label","Delete Selected Row","icon","pi pi-times","styleClass","p-button-danger",3,"onClick"],["dataKey","serialNo",3,"value","selection","paginator","rows","selectionPageOnly","tableStyle","selectionChange"],["pTemplate","header"],["pTemplate","body"],["inputId","dropdown","optionLabel","memberName","optionValue","memberId","filterBy","memberName",3,"autoDisplayFirst","options","ngModel","filter","disabled","ngModelChange"],[2,"width","4rem"],[2,"min-width","200px"],[3,"value","disabled"],["type","number","id","inputtext","pInputText","","disabled","true",3,"ngModel","ngModelChange"],["appendTo","body",3,"ngModel","disabled","ngModelChange"],["type","number","id","inputtext","pInputText","",3,"ngModel","disabled","ngModelChange","blur"],["type","text","id","inputtext","pInputText","","upperCase","",3,"ngModel","disabled","ngModelChange"],["type","text","id","inputtext","pInputText","","mobileNumber","",3,"ngModel","disabled","ngModelChange"]],template:function(t,i){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"h5"),e._uU(3,"Mill Withdrawal"),e.qZA(),e.TgZ(4,"div",1)(5,"div",2)(6,"span",3)(7,"p-dropdown",4),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.stateCode=s}),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"State"),e.TgZ(10,"span",6),e._uU(11," *"),e.qZA()()()(),e.TgZ(12,"div",2)(13,"span",3)(14,"p-dropdown",7),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.stockType=s})("onChange",function(){return i.checkStockType()}),e.qZA(),e.TgZ(15,"label",5),e._uU(16,"Stock Type"),e.TgZ(17,"span",6),e._uU(18," *"),e.qZA()()()(),e.YNc(19,b,7,5,"div",8),e.YNc(20,T,7,5,"div",8),e.YNc(21,D,7,5,"div",8),e.YNc(22,W,7,4,"div",8),e.YNc(23,Z,7,5,"div",8),e.TgZ(24,"div",2)(25,"span",3)(26,"p-dropdown",9),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.seasonId=s})("onChange",function(){return i.getFinancialYear(i.millWithdrawal.seasonId)}),e.qZA(),e.TgZ(27,"label",5),e._uU(28,"Season"),e.TgZ(29,"span",6),e._uU(30," *"),e.qZA()()()(),e.TgZ(31,"div",2)(32,"span",3)(33,"input",10),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.financialYear=s}),e.qZA(),e.TgZ(34,"label",11),e._uU(35,"Financial Year"),e.TgZ(36,"span",6),e._uU(37," *"),e.qZA()()()(),e.TgZ(38,"div",2)(39,"span",3)(40,"p-dropdown",12),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.commodityCode=s}),e.qZA(),e.TgZ(41,"label",5),e._uU(42,"Commodity"),e.TgZ(43,"span",6),e._uU(44," *"),e.qZA()()()(),e.TgZ(45,"div",2)(46,"span",3)(47,"p-dropdown",13),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.millCode=s}),e.qZA(),e.TgZ(48,"label",5),e._uU(49,"Mill"),e.TgZ(50,"span",6),e._uU(51," *"),e.qZA()()()(),e.TgZ(52,"div",2)(53,"span",3)(54,"input",14),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.receiptNo=s}),e.qZA(),e.TgZ(55,"label",11),e._uU(56,"Receipt No."),e.TgZ(57,"span",6),e._uU(58," *"),e.qZA()()()(),e.TgZ(59,"div",2)(60,"span",3)(61,"input",10),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.totalQuantityWithdrew=s}),e.qZA(),e.TgZ(62,"label",11),e._uU(63,"Total Quantity Received"),e.TgZ(64,"span",6),e._uU(65," *"),e.qZA()()()(),e.TgZ(66,"div",2)(67,"span",3)(68,"input",10),e.NdJ("ngModelChange",function(s){return i.millWithdrawal.totalBagsWithdrew=s}),e.qZA(),e.TgZ(69,"label",11),e._uU(70,"Total Bags Received"),e.TgZ(71,"span",6),e._uU(72," *"),e.qZA()()()()(),e.TgZ(73,"div",15)(74,"p-button",16),e.NdJ("onClick",function(){return i.submitDeposit()}),e.qZA(),e.TgZ(75,"p-button",17),e.NdJ("onClick",function(){return i.reset()}),e.qZA()()(),e.TgZ(76,"div",0)(77,"div",18)(78,"p-button",19),e.NdJ("onClick",function(){return i.addRow()}),e.qZA(),e.TgZ(79,"p-button",20),e.NdJ("onClick",function(){return i.removeSelectedRows()}),e.qZA()(),e.TgZ(80,"p-table",21),e.NdJ("selectionChange",function(s){return i.selectedRows=s}),e.YNc(81,N,21,0,"ng-template",22),e.YNc(82,L,21,19,"ng-template",23),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("autoDisplayFirst",!1)("options",i.statesList)("ngModel",i.millWithdrawal.stateCode)("filter",!0)("disabled",i.disableOnSuccess),e.xp6(7),e.Q6J("autoDisplayFirst",!1)("options",i.stockTypeList)("ngModel",i.millWithdrawal.stockType)("disabled",i.disableOnSuccess),e.xp6(5),e.Q6J("ngIf",i.hideShowGovtFields),e.xp6(1),e.Q6J("ngIf",i.hideShowGovtFields),e.xp6(1),e.Q6J("ngIf",i.hideShowGovtFields),e.xp6(1),e.Q6J("ngIf",!i.hideShowGovtFields),e.xp6(1),e.Q6J("ngIf",!i.hideShowGovtFields),e.xp6(3),e.Q6J("autoDisplayFirst",!1)("options",i.seasonIDList)("ngModel",i.millWithdrawal.seasonId)("filter",!0)("disabled",i.disableOnSuccess),e.xp6(7),e.Q6J("ngModel",i.millWithdrawal.financialYear),e.xp6(7),e.Q6J("autoDisplayFirst",!1)("options",i.commodityList)("ngModel",i.millWithdrawal.commodityCode)("filter",!0)("disabled",i.disableOnSuccess),e.xp6(7),e.Q6J("autoDisplayFirst",!1)("options",i.millList)("ngModel",i.millWithdrawal.millCode)("filter",!0)("disabled",i.disableOnSuccess),e.xp6(7),e.Q6J("ngModel",i.millWithdrawal.receiptNo)("disabled",i.disableOnSuccess),e.xp6(7),e.Q6J("ngModel",i.millWithdrawal.totalQuantityWithdrew),e.xp6(7),e.Q6J("ngModel",i.millWithdrawal.totalBagsWithdrew),e.xp6(12),e.Q6J("value",i.withdrawalDetailsList)("selection",i.selectedRows)("paginator",!0)("rows",5)("selectionPageOnly",!0)("tableStyle",e.DdM(40,S)))},dependencies:[c.O5,g.zx,m.Lt,p.jx,d.Fj,d.wV,d.JJ,d.On,f.f,y.o,h.iA,h.UA,h.Mo,C.FN]}),l})(),x=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[w.Bz.forChild([{path:"mill_dispatch",data:{breadcrumb:"Mill  Withdrawal"},component:A},{path:"**",redirectTo:"/notfound"}]),w.Bz]}),l})();var J=n(5063),q=n(9766),O=n(5047),Q=n(5722),U=n(3054),F=n(1118),B=n(3520),E=n(3631);let G=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[p.ez],imports:[c.ez,x,g.hJ,m.kW,d.u5,d.u5,J.Z,E.WN,f._8,q.Gg,m.kW,B.zz,O.L$,F.XH,Q.q4,U.A,y.j,h.U$,C.EV]}),l})()}}]);