import { Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs';
  
@Injectable()  
export class SharedService {  
  
    value: any;
    _valueBS = new BehaviorSubject<any>('');
  
    constructor() {
      this.value;
      this._valueBS.next(this.value);
    }
  
    updateData(val: any) {
      this.value = val;
      this._valueBS.next(this.value);
    }

}