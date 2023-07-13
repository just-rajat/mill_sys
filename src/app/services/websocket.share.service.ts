import { Injectable, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";


@Injectable()
export class WebSocketShareService implements OnDestroy {

    private nameSource = new BehaviorSubject<string>(undefined);
    broadcast:Observable<any> = this.nameSource.asObservable()


    private nameSourceUser = new BehaviorSubject<string>(undefined);
    broadcastuser:Observable<any> = this.nameSourceUser.asObservable()

    private nameSourceUserMessage = new BehaviorSubject<string>(undefined);
    broadcastUserMessage:Observable<any> = this.nameSourceUserMessage.asObservable()


    private nameSourceLastBid = new BehaviorSubject<string>(undefined);
    broadcastLastBid:Observable<any> = this.nameSourceLastBid.asObservable()


    private nameSourceMargin = new BehaviorSubject<string>(undefined);
    broadcastMargin:Observable<any> = this.nameSourceMargin.asObservable()

    private nameSourceSuperH1 = new BehaviorSubject<string>(undefined);
    broadcastSuperH1:Observable<any> = this.nameSourceSuperH1.asObservable()


    constructor() { }
    ngOnDestroy(): void {
        this.nameSource .unsubscribe();
        this.nameSourceUser .unsubscribe();
    }
    
    onNewValueReceive(msg: string) {        
        this.nameSource.next(msg);
    }


    onNewValueReceiveUser(msg:string){
        this.nameSourceUser.next(msg);
    }

     onNewMessageReceiveUser(msg:any){
         this.nameSourceUserMessage.next(msg);
     }


     onNewMessageReceiveLastBid(msg:any){
        this.nameSourceLastBid.next(msg);
     }

     onNewMessageReceiveMargin(msg:any){
        this.nameSourceMargin.next(msg);
     }

     onNewMessageReceiveSuperH1(msg:any){
        this.nameSourceSuperH1.next(msg);
     }
}