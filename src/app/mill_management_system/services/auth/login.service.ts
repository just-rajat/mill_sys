import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  
  service_path: string = environment.SERVICE_URL;
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  

  public login(loginDetails: NgForm){
    return this.httpClient.post(this.service_path+"/authenticate",loginDetails,{headers: this.requestHeader});
  }


}
