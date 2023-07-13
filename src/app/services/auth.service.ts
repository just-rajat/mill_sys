import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SseService } from './sse.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};
const httpOption = {
  withCredentials: true,
};

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'arraybuffer' as 'arraybuffer',
  withCredentials: true,
};
const optionsUploadAndDownload = {
  responseType: 'arraybuffer' as 'arraybuffer',
  withCredentials: true,
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getData() {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient, private _ngZone: NgZone,
    private _sseService: SseService, private tokenStorage: TokenStorageService) { }
  post(url: any, data: any): Observable<any> {
    return this.http.post(environment.GATEWAY_API + url, data, httpOptions);
  }
  get(url: any): Observable<any> {
    return this.http.get(environment.GATEWAY_API + url, httpOptions);
  }
  put(url: any, data: any): Observable<any> {
    return this.http.put(environment.GATEWAY_API + url, data, httpOptions);
  }
  
  saveUserData(formData: FormData): Observable<any> {
    return this.http.post(environment.GATEWAY_API + 'registration-service/registration/saveRegistrationData', formData, httpOptions);
  }
  contractPostMultipart(url: any, data: any): Observable<any> {
    return this.http.post(environment.GATEWAY_API + url, data, httpOption);
  }
  contractPostExportExcel(url: any, data: any): Observable<ArrayBuffer> {
    return this.http.post(environment.GATEWAY_API + url, data, optionsUploadAndDownload);
  }
}
