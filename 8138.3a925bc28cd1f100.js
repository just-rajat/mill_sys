"use strict";(self.webpackChunkmill_sys=self.webpackChunkmill_sys||[]).push([[8138],{8138:(N,m,s)=>{s.r(m),s.d(m,{ChatAppModule:()=>j});var p=s(6895),i=s(433),h=s(6957),e=s(1571),v=s(1135),C=s(529);let c=(()=>{class n{constructor(t){this.http=t,this._activeUser={id:1,name:"Ioni Bowcher",image:"ionibowcher.png",status:"active",messages:[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",ownerId:1,createdAt:1652646338240},{text:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",ownerId:1,createdAt:1652646368718},{text:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",ownerId:123,createdAt:1652646368718}],lastSeen:"2d"},this.activeUser=new v.X(this._activeUser),this.activeUser$=this.activeUser.asObservable()}getChatData(){return this.http.get("assets/demo/data/chat.json").toPromise().then(t=>t.data).then(t=>t)}changeActiveChat(t){this._activeUser=t,this.activeUser.next(t)}sendMessage(t){this._activeUser.messages.push(t),this.activeUser.next(this._activeUser)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var d=s(1740);const _=function(n,o){return{"bg-green-400":n,"bg-red-400":o,"bg-yellow-400":"away"}};let w=(()=>{class n{constructor(t){this.chatService=t}ngOnInit(){let t=this.user.messages.filter(r=>123!==r.ownerId);this.lastMessage=t[t.length-1]}changeView(t){this.chatService.changeActiveChat(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-card"]],inputs:{user:"user"},decls:12,vars:8,consts:[["tabindex","0",1,"flex","flex-nowrap","justify-content-between","align-items-center","border-1","surface-border","border-round","p-3","cursor-pointer","select-none","hover:surface-hover","transition-colors","transition-duration-150",3,"keydown.enter","click"],[1,"flex","align-items-center"],[1,"relative","md:mr-3"],["alt","user",1,"w-3rem","h-3rem","border-circle","shadow-4",3,"src"],[1,"w-1rem","h-1rem","border-circle","border-2","surface-border","absolute",2,"bottom","2px","right","2px",3,"ngClass"],[1,"flex-column","hidden","md:flex"],[1,"text-900","font-semibold","block"],[1,"block","text-600","text-overflow-ellipsis","overflow-hidden","white-space-nowrap","w-10rem","text-sm"],[1,"text-700","font-semibold","ml-auto","hidden","md:inline"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.NdJ("keydown.enter",function(){return r.changeView(r.user)})("click",function(){return r.changeView(r.user)}),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"span",4),e.qZA(),e.TgZ(5,"div",5)(6,"span",6),e._uU(7),e.qZA(),e.TgZ(8,"span",7),e._uU(9),e.qZA()()(),e.TgZ(10,"span",8),e._uU(11),e.qZA()()),2&t&&(e.xp6(3),e.MGl("src","assets/demo/images/avatar/",r.user.image,"",e.LSH),e.xp6(1),e.Q6J("ngClass",e.WLB(5,_,"active"===r.user.status,"busy"===r.user.status)),e.xp6(3),e.Oqu(r.user.name),e.xp6(2),e.Oqu(r.lastMessage.text),e.xp6(2),e.Oqu(r.user.lastSeen))},dependencies:[p.mk],encapsulation:2}),n})();function Z(n,o){1&n&&e._UZ(0,"app-user-card",9),2&n&&e.Q6J("user",o.$implicit)}let T=(()=>{class n{constructor(t){this.chatService=t,this.searchValue="",this.users=[],this.filteredUsers=[]}ngOnInit(){this.chatService.getChatData().then(t=>{this.users=t,this.filteredUsers=this.users})}filter(){let t=[];for(let r=0;r<this.users.length;r++){let a=this.users[r];0==a.name.toLowerCase().indexOf(this.searchValue.toLowerCase())&&t.push(a)}this.filteredUsers=[...t]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat-sidebar"]],decls:10,vars:2,consts:[[1,"flex","flex-column","align-items-center","border-bottom-1","surface-border","p-6"],["src","assets/demo/images/avatar/circle/avatar-f-1@2x.png","alt","Asiya Javayant",1,"w-6rem","h-6rem","border-circle","shadow-4"],[1,"text-900","text-xl","font-semibold","mt-4"],[1,"w-full","flex","row-gap-4","flex-column","surface-border","p-4"],[1,"p-input-icon-left","w-full"],[1,"pi","pi-search"],["id","search","type","text","pInputText","","placeholder","Search",1,"w-full",3,"ngModel","ngModelChange","input"],[1,"flex","flex-row","gap-4","md:flex-column","overflow-auto"],[3,"user",4,"ngFor","ngForOf"],[3,"user"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"span",2),e._uU(3,"Asiya Javayant"),e.qZA()(),e.TgZ(4,"div",3)(5,"span",4),e._UZ(6,"i",5),e.TgZ(7,"input",6),e.NdJ("ngModelChange",function(l){return r.searchValue=l})("input",function(){return r.filter()}),e.qZA()(),e.TgZ(8,"div",7),e.YNc(9,Z,1,1,"app-user-card",8),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngModel",r.searchValue),e.xp6(2),e.Q6J("ngForOf",r.filteredUsers))},dependencies:[p.sg,i.Fj,i.JJ,i.On,d.o,w],encapsulation:2}),n})();var g=s(5593),y=s(805),f=s(2435),x=s(1795);function A(n,o){if(1&n&&(e.TgZ(0,"div",23)(1,"div",24),e._UZ(2,"img",25),e.qZA(),e.TgZ(3,"div",26)(4,"p",27),e._uU(5),e.qZA(),e.TgZ(6,"span",28),e._uU(7),e.qZA(),e.TgZ(8,"p",29),e._uU(9),e._UZ(10,"i",30),e.qZA()()()),2&n){const t=e.oxw().$implicit,r=e.oxw();e.xp6(2),e.MGl("src","assets/demo/images/avatar/",r.user.image,"",e.LSH),e.xp6(3),e.Oqu(r.user.name),e.xp6(2),e.Oqu(t.text),e.xp6(2),e.Oqu(r.parseDate(t.createdAt))}}function U(n,o){if(1&n&&(e.TgZ(0,"div",23)(1,"div",31)(2,"span",32),e._uU(3),e.qZA(),e.TgZ(4,"p",29),e._uU(5),e._UZ(6,"i",30),e.qZA()()()),2&n){const t=e.oxw().$implicit,r=e.oxw();e.xp6(3),e.Oqu(t.text),e.xp6(2),e.hij("",r.parseDate(t.createdAt)," ")}}function M(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,A,11,4,"div",22),e.YNc(2,U,7,2,"div",22),e.qZA()),2&n){const t=o.$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",123!==t.ownerId),e.xp6(1),e.Q6J("ngIf",t.ownerId===r.defaultUserId)}}function S(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){const l=e.CHM(t).$implicit,u=e.oxw(2);return e.MAs(23).hide(),e.KtG(u.onEmojiSelect(l))}),e.qZA()}2&n&&e.Q6J("label",o.$implicit)}function J(n,o){if(1&n&&e.YNc(0,S,1,1,"button",33),2&n){const t=e.oxw();e.Q6J("ngForOf",t.emojis)}}const B=function(n,o,t){return{"bg-green-400":n,"bg-red-400":o,"bg-yellow-400":t}};let k=(()=>{class n{constructor(t){this.chatService=t,this.defaultUserId=123,this.textContent="",this.uploadedFiles=[],this.emojis=["\u{1f600}","\u{1f603}","\u{1f604}","\u{1f601}","\u{1f606}","\u{1f605}","\u{1f602}","\u{1f923}","\u{1f607}","\u{1f609}","\u{1f60a}","\u{1f642}","\u{1f643}","\u{1f60b}","\u{1f60c}","\u{1f60d}","\u{1f970}","\u{1f618}","\u{1f617}","\u{1f619}","\u{1f61a}","\u{1f92a}","\u{1f61c}","\u{1f61d}","\u{1f61b}","\u{1f911}","\u{1f60e}","\u{1f913}","\u{1f9d0}","\u{1f920}","\u{1f973}","\u{1f917}","\u{1f921}","\u{1f60f}","\u{1f636}","\u{1f610}","\u{1f611}","\u{1f612}","\u{1f644}","\u{1f928}","\u{1f914}","\u{1f92b}","\u{1f92d}","\u{1f925}","\u{1f633}","\u{1f61e}","\u{1f61f}","\u{1f620}","\u{1f621}","\u{1f92c}","\u{1f614}","\u{1f61f}","\u{1f620}","\u{1f621}","\u{1f92c}","\u{1f614}","\u{1f615}","\u{1f641}","\u{1f62c}","\u{1f97a}","\u{1f623}","\u{1f616}","\u{1f62b}","\u{1f629}","\u{1f971}","\u{1f624}","\u{1f62e}","\u{1f631}","\u{1f628}","\u{1f630}","\u{1f62f}","\u{1f626}","\u{1f627}","\u{1f622}","\u{1f625}","\u{1f62a}","\u{1f924}"]}setMessage(){if(this.user){let t=this.user.messages.filter(r=>r.ownerId!==this.defaultUserId);this.message=t[t.length-1]}}ngOnInit(){this.setMessage()}sendMessage(){if(""!=this.textContent&&" "!==this.textContent){let t={text:this.textContent,ownerId:123,createdAt:(new Date).getTime()};this.chatService.sendMessage(t),this.textContent=""}}onEmojiSelect(t){this.textContent+=t}parseDate(t){return new Date(t).toTimeString().split(":").slice(0,2).join(":")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat-box"]],inputs:{user:"user"},decls:25,vars:10,consts:[[1,"flex","flex-column","h-full"],[1,"flex","align-items-center","border-bottom-1","surface-border","p-3","lg:p-6"],[1,"relative","flex","align-items-center","mr-3"],["alt","user.name",1,"w-4rem","h-4rem","border-circle","shadow-4",3,"src"],[1,"w-1rem","h-1rem","border-circle","border-2","surface-border","absolute","bottom-0","right-0",3,"ngClass"],[1,"mr-2"],[1,"text-900","font-semibold","block"],[1,"text-700"],[1,"flex","align-items-center","ml-auto"],["pButton","","pRipple","","type","button","icon","pi pi-phone",1,"p-button-rounded","p-button-outlined","p-button-secondary","mr-3"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-outlined","p-button-secondary"],[1,"p-3","md:px-4","lg:px-6","lg:py-4","mt-2","overflow-y-auto",2,"max-height","53vh",3,"scrollTop"],["chatWindow",""],[4,"ngFor","ngForOf"],[1,"p-3","md:p-4","lg:p-6","flex","flex-column","sm:flex-row","align-items-center","mt-auto","border-top-1","surface-border","gap-3"],["id","message","type","text","pInputText","","placeholder","Type a message",1,"flex-1","w-full","sm:w-auto","border-round",3,"ngModel","ngModelChange","keydown.enter"],[1,"flex","w-full","sm:w-auto","gap-3"],["pRipple","",1,"p-button","p-button-secondary","w-full","sm:w-auto","justify-content-center","text-xl",3,"click"],["pButton","","pRipple","","label","Send","icon","pi pi-send",1,"w-full","sm:w-auto",3,"click"],["styleClass","w-full sm:w-30rem"],["op",""],["pTemplate",""],["class","grid grid-nogutter mb-4",4,"ngIf"],[1,"grid","grid-nogutter","mb-4"],[1,"mr-3","mt-1"],["alt","user.name",1,"w-3rem","h-3rem","border-circle","shadow-4",3,"src"],[1,"col","mt-3"],[1,"text-900","font-semibold","mb-3"],[1,"text-700","inline-block","font-medium","border-1","surface-border","p-3","white-space-normal","border-round",2,"word-break","break-word","max-width","80%"],[1,"text-700","mt-3"],[1,"pi","pi-check","ml-2","text-green-400"],[1,"col","mt-3","text-right"],[1,"inline-block","text-left","font-medium","border-1","surface-border","bg-primary-100","text-primary-900","p-3","white-space-normal","border-round",2,"word-break","break-word","max-width","80%"],["pButton","","pRipple","","type","button","class","p-2 p-button-text text-2xl",3,"label","click",4,"ngFor","ngForOf"],["pButton","","pRipple","","type","button",1,"p-2","p-button-text","text-2xl",3,"label","click"]],template:function(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"span",4),e.qZA(),e.TgZ(5,"div",5)(6,"span",6),e._uU(7),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Last active 1 hour ago"),e.qZA()(),e.TgZ(10,"div",8),e._UZ(11,"button",9)(12,"button",10),e.qZA()(),e.TgZ(13,"div",11,12),e.YNc(15,M,3,2,"div",13),e.qZA(),e.TgZ(16,"div",14)(17,"input",15),e.NdJ("ngModelChange",function(u){return r.textContent=u})("keydown.enter",function(){return r.sendMessage()}),e.qZA(),e.TgZ(18,"div",16)(19,"button",17),e.NdJ("click",function(u){e.CHM(a);const b=e.MAs(23);return e.KtG(b.toggle(u))}),e._uU(20,"\u{1f600}"),e.qZA(),e.TgZ(21,"button",18),e.NdJ("click",function(){return r.sendMessage()}),e.qZA()()()(),e.TgZ(22,"p-overlayPanel",19,20),e.YNc(24,J,1,1,"ng-template",21),e.qZA()}if(2&t){const a=e.MAs(14);e.xp6(3),e.MGl("src","assets/demo/images/avatar/",r.user.image,"",e.LSH),e.xp6(1),e.Q6J("ngClass",e.kEZ(6,B,"active"===r.user.status,"busy"===r.user.status,"away"===r.user.status)),e.xp6(3),e.Oqu(r.user.name),e.xp6(6),e.Q6J("scrollTop",a.scrollHeight),e.xp6(2),e.Q6J("ngForOf",r.user.messages),e.xp6(2),e.Q6J("ngModel",r.textContent)}},dependencies:[p.mk,p.sg,p.O5,i.Fj,i.JJ,i.On,d.o,g.Hq,y.jx,f.T,x.H],encapsulation:2,changeDetection:0}),n})(),q=(()=>{class n{constructor(t){this.chatService=t,this.subscription=this.chatService.activeUser$.subscribe(r=>this.activeUser=r)}ngOnDestroy(){this.subscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:1,consts:[[1,"flex","flex-column","md:flex-row","gap-5",2,"min-height","81vh"],[1,"md:w-25rem","border-1","surface-border","surface-card","border-round"],[1,"flex-1","border-1","surface-border","surface-card","border-round"],[3,"user"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-chat-sidebar"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"app-chat-box",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("user",r.activeUser))},dependencies:[T,k],encapsulation:2}),n})(),F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild([{path:"",component:q}]),h.Bz]}),n})();var O=s(8271),I=s(8639);let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[c],imports:[p.ez,i.u5,F,O.F,d.j,g.hJ,I.TX,f.y,x.T]}),n})()}}]);