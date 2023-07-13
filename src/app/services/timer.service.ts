// import { Injectable, OnInit } from "@angular/core";
// import { EmitterService } from "./emitter.service";

// @Injectable({
//     providedIn: 'root'
//   })
// export class TimerService implements OnInit {

//     constructor(private emitterService:EmitterService){
        
//     }
//     ngOnInit(): void {
//         this.reloadServerTime();
//     }



//     serverTime:any=new Date();

//     interval:any;
//     reloadServerTime(){
//         this.emitterService.timerBrodcast.subscribe(data =>{
//             this.serverTime=data.data;

//             if(this.interval){
//                 clearInterval(this.interval);
//             }

//            this.interval= setInterval(() => {
//                 this.serverTime= this.serverTime+1000;
//                 console.log(new Date(this.serverTime))
//             }, 1000);
//         })
//     }


    

    

// }
