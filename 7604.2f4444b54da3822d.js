"use strict";(self.webpackChunkmill_sys=self.webpackChunkmill_sys||[]).push([[7604],{7604:(J,w,g)=>{g.d(w,{FI:()=>b,VO:()=>c,uE:()=>F});var t=g(1571),r=g(6895),d=g(982),l=g(805),h=g(1997);function m(a,n){if(1&a&&(t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"i"),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.Tol("p-dataview-loading-icon pi-spin "+e.loadingIcon)}}function f(a,n){1&a&&t.GkF(0)}function _(a,n){if(1&a&&(t.TgZ(0,"div",12),t.Hsn(1),t.YNc(2,f,1,0,"ng-container",13),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",e.headerTemplate)}}function y(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"p-paginator",14),t.NdJ("onPageChange",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.paginate(s))}),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)}}function T(a,n){1&a&&t.GkF(0)}const P=function(a,n){return{$implicit:a,rowIndex:n}};function L(a,n){if(1&a&&t.YNc(0,T,1,0,"ng-container",15),2&a){const e=n.$implicit,o=n.index,s=t.oxw();t.Q6J("ngTemplateOutlet",s.itemTemplate)("ngTemplateOutletContext",t.WLB(2,P,e,o))}}function v(a,n){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.emptyMessageLabel," ")}}function D(a,n){1&a&&t.GkF(0,null,19)}function C(a,n){if(1&a&&(t.TgZ(0,"div",16)(1,"div",17),t.YNc(2,v,2,1,"ng-container",18),t.YNc(3,D,2,0,"ng-container",13),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",!e.emptyMessageTemplate)("ngIfElse",e.emptyFilter),t.xp6(1),t.Q6J("ngTemplateOutlet",e.emptyMessageTemplate)}}function k(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"p-paginator",20),t.NdJ("onPageChange",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.paginate(s))}),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)}}function I(a,n){1&a&&t.GkF(0)}function O(a,n){if(1&a&&(t.TgZ(0,"div",21),t.Hsn(1,1),t.YNc(2,I,1,0,"ng-container",13),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",e.footerTemplate)}}const R=[[["p-header"]],[["p-footer"]]],S=function(a,n){return{"p-dataview p-component":!0,"p-dataview-list":a,"p-dataview-grid":n}},V=["p-header","p-footer"],u=function(a){return{"p-highlight":a}};let c=(()=>{class a{constructor(e,o,s,i){this.el=e,this.cd=o,this.filterService=s,this.config=i,this.pageLinks=5,this.paginatorPosition="bottom",this.alwaysShowPaginator=!0,this.paginatorDropdownScrollHeight="200px",this.currentPageReportTemplate="{currentPage} of {totalPages}",this.showFirstLastIcon=!0,this.showPageLinks=!0,this.emptyMessage="",this.onLazyLoad=new t.vpe,this.gridStyleClass="",this.trackBy=(p,M)=>M,this.loadingIcon="pi pi-spinner",this.first=0,this.onPage=new t.vpe,this.onSort=new t.vpe,this.onChangeLayout=new t.vpe,this._layout="list"}get layout(){return this._layout}set layout(e){this._layout=e,this.initialized&&this.changeLayout(e)}ngOnInit(){this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}ngOnChanges(e){e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"listItem":this.listItemTemplate=e.template;break;case"gridItem":this.gridItemTemplate=e.template;break;case"paginatorleft":this.paginatorLeftTemplate=e.template;break;case"paginatorright":this.paginatorRightTemplate=e.template;break;case"paginatordropdownitem":this.paginatorDropdownItemTemplate=e.template;break;case"empty":this.emptyMessageTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template}}),this.updateItemTemplate()}updateItemTemplate(){switch(this.layout){case"list":this.itemTemplate=this.listItemTemplate;break;case"grid":this.itemTemplate=this.gridItemTemplate}}changeLayout(e){this._layout=e,this.onChangeLayout.emit({layout:this.layout}),this.updateItemTemplate(),this.cd.markForCheck()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,o)=>{let s=d.gb.resolveFieldData(e,this.sortField),i=d.gb.resolveFieldData(o,this.sortField),p=null;return p=null==s&&null!=i?-1:null!=s&&null==i?1:null==s&&null==i?0:"string"==typeof s&&"string"==typeof i?s.localeCompare(i):s<i?-1:s>i?1:0,this.sortOrder*p}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return null==e||0==e.length}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(l.ws.EMPTY_MESSAGE)}filter(e,o="contains"){if(this.filterValue=e,this.value&&this.value.length){let s=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,s,e,o,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}ngOnDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(l.iZ),t.Y36(l.b4))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-dataView"]],contentQueries:function(e,o,s){if(1&e&&(t.Suo(s,l.h4,5),t.Suo(s,l.$_,5),t.Suo(s,l.jx,4)),2&e){let i;t.iGM(i=t.CRH())&&(o.header=i.first),t.iGM(i=t.CRH())&&(o.footer=i.first),t.iGM(i=t.CRH())&&(o.templates=i)}},hostAttrs:[1,"p-element"],inputs:{paginator:"paginator",rows:"rows",totalRecords:"totalRecords",pageLinks:"pageLinks",rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",alwaysShowPaginator:"alwaysShowPaginator",paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:"showCurrentPageReport",showJumpToPageDropdown:"showJumpToPageDropdown",showFirstLastIcon:"showFirstLastIcon",showPageLinks:"showPageLinks",lazy:"lazy",emptyMessage:"emptyMessage",style:"style",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:"loading",loadingIcon:"loadingIcon",first:"first",sortField:"sortField",sortOrder:"sortOrder",value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[t.TTD],ngContentSelectors:V,decls:11,vars:20,consts:[[3,"ngClass","ngStyle"],["class","p-dataview-loading",4,"ngIf"],["class","p-dataview-header",4,"ngIf"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","onPageChange",4,"ngIf"],[1,"p-dataview-content"],[1,"p-grid","p-nogutter","grid","grid-nogutter",3,"ngClass"],["ngFor","",3,"ngForOf","ngForTrackBy"],["class","p-col col",4,"ngIf"],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","onPageChange",4,"ngIf"],["class","p-dataview-footer",4,"ngIf"],[1,"p-dataview-loading"],[1,"p-dataview-loading-overlay","p-component-overlay"],[1,"p-dataview-header"],[4,"ngTemplateOutlet"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","onPageChange"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-col","col"],[1,"p-dataview-emptymessage"],[4,"ngIf","ngIfElse"],["emptyFilter",""],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","onPageChange"],[1,"p-dataview-footer"]],template:function(e,o){1&e&&(t.F$t(R),t.TgZ(0,"div",0),t.YNc(1,m,3,2,"div",1),t.YNc(2,_,3,1,"div",2),t.YNc(3,y,1,16,"p-paginator",3),t.TgZ(4,"div",4)(5,"div",5),t.YNc(6,L,1,5,"ng-template",6),t.ALo(7,"slice"),t.YNc(8,C,4,3,"div",7),t.qZA()(),t.YNc(9,k,1,16,"p-paginator",8),t.YNc(10,O,3,1,"div",9),t.qZA()),2&e&&(t.Tol(o.styleClass),t.Q6J("ngClass",t.WLB(17,S,"list"===o.layout,"grid"===o.layout))("ngStyle",o.style),t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(1),t.Q6J("ngIf",o.header||o.headerTemplate),t.xp6(1),t.Q6J("ngIf",o.paginator&&("top"===o.paginatorPosition||"both"==o.paginatorPosition)),t.xp6(2),t.Q6J("ngClass",o.gridStyleClass),t.xp6(1),t.Q6J("ngForOf",o.paginator?t.Dn7(7,13,o.filteredValue||o.value,o.lazy?0:o.first,(o.lazy?0:o.first)+o.rows):o.filteredValue||o.value)("ngForTrackBy",o.trackBy),t.xp6(2),t.Q6J("ngIf",o.isEmpty()&&!o.loading),t.xp6(1),t.Q6J("ngIf",o.paginator&&("bottom"===o.paginatorPosition||"both"==o.paginatorPosition)),t.xp6(1),t.Q6J("ngIf",o.footer||o.footerTemplate))},dependencies:[r.mk,r.sg,r.O5,r.tP,r.PC,h.D,r.OU],styles:[".p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}\n"],encapsulation:2,changeDetection:0}),a})(),F=(()=>{class a{constructor(e){this.dv=e}changeLayout(e,o){this.dv.changeLayout(o),e.preventDefault()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(c))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-dataViewLayoutOptions"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},decls:5,vars:10,consts:[[3,"ngClass","ngStyle"],["type","button",1,"p-button","p-button-icon-only",3,"ngClass","click","keydown.enter"],[1,"pi","pi-bars"],[1,"pi","pi-th-large"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(i){return o.changeLayout(i,"list")})("keydown.enter",function(i){return o.changeLayout(i,"list")}),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(i){return o.changeLayout(i,"grid")})("keydown.enter",function(i){return o.changeLayout(i,"grid")}),t._UZ(4,"i",3),t.qZA()()),2&e&&(t.Tol(o.styleClass),t.Q6J("ngClass","p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle",o.style),t.xp6(1),t.Q6J("ngClass",t.VKq(6,u,"list"===o.dv.layout)),t.xp6(2),t.Q6J("ngClass",t.VKq(8,u,"grid"===o.dv.layout)))},dependencies:[r.mk,r.PC],encapsulation:2}),a})(),b=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[r.ez,l.m8,h.U,l.m8]}),a})()}}]);