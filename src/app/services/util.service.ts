import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }
  encrypt(password: any) {
    const hash = CryptoJS.SHA1(password);
    return hash.toString(CryptoJS.enc.Base64).replace('=', ''.trim());
  }

  encryptSHA512(userId: any,password: any){
    return CryptoJS.SHA512(userId.toUpperCase() + "#" + this.encrypt(password));
  }
   static decodeProceesType(type:any){
    var processdesc:any;
  switch(type){
  case 2:
    processdesc = 'DIRECT MATCH';
    break;
    case 3:
      processdesc = 'DISCRETIONARY';
      break;
    case 4:
    processdesc = 'NEGOTIATION';
    break;
    
  }
  return processdesc;
  }
  //decode side
  static decodeOrderSide(type:any){
    var ordSide:any;
  switch(type){
  case "S":
    ordSide = 'Sell';
    break;
    case "B":
        ordSide = 'Buy';
      break;
  }
  return ordSide;
  }

  static approveStatus(type:any){
    var approveStatus:any;
  switch(type){
  case "T":
    approveStatus = 'APPROVED';
    break;
    case "F":
      approveStatus = 'APROVAL_PENDING';
      break;
      case "R":
      approveStatus = 'REJECTED';
      break;
  }
  return approveStatus;
  }

  static decodeauctionType(type:any){
    var auctionType:any;
  switch(type){
  case "E":
    auctionType = 'ENGLISH';
    break;
    case "Y":
      auctionType = 'YANKEE';
      break;
      case "D":
    auctionType = 'DUTCH';
    break;
    case "L1":
      auctionType = 'AUCTION_FORMAT_1';
      break;
      case "L2":
    auctionType = 'AUCTION_FORMAT_2';
    break;
    case "L3":
      auctionType = 'AUCTION_FORMAT_3';
      break;
      case "P":
    auctionType = 'PTP_AUCTION';
    break;
    case "O":
      auctionType = 'YANKEE_TRADE_ALLOCATION';
      break;
      case "SE":
      auctionType = 'SEALED_ENGLISH_AUCTION';
      break;
      case "U":
        auctionType = 'DUTCH_REVERSE';
        break;

  }
  return auctionType;
  }



  isNeitherNullNorEmpty(obj) {
    if (obj === null) {
      return false;
    }
    if (typeof obj === 'string' && obj.trim() === '') {
      return false;
    }
    if (Array.isArray(obj) && obj.length === 0) {
      return false;
    }
    return true;
  }
 
}
