import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class EmitterService {

    public nameSource = new BehaviorSubject<any>('');
    routeBrodcast:Observable<any> = this.nameSource.asObservable()
    constructor() { }

    setData(data) {
          this.nameSource.next(data);
    }


    public nameTimerSource = new BehaviorSubject<any>('');
    timerBrodcast:Observable<any> = this.nameTimerSource.asObservable()
    

    setServerTime(data) {
          this.nameTimerSource.next(data);
    }

    public auctionFloorSource = new BehaviorSubject<any>('');
    auctionFloorBrodcast:Observable<any> = this.auctionFloorSource.asObservable()
    

    setauctionFloorData(data) {
          this.auctionFloorSource.next(data);
    }

    public marketWatchSource = new BehaviorSubject<any>('');
    marketWatchBrodcast:Observable<any> = this.marketWatchSource.asObservable()
    

    setmarketWatchData(data) {
          this.marketWatchSource.next(data);
    }
}