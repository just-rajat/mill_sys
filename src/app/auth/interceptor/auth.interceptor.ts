import { HTTP_INTERCEPTORS, HttpEvent, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
const TOKEN_HEADER_KEY = 'X-XSRF-TOKEN';       // for Spring Boot back-end
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
   // console.log(authReq.url);
    const token = this.token.getCsrfToken();
    const loginType=this.token.getLoginType();
    if (token != null && token !=undefined &&  token !="undefined") {
      const headers = new HttpHeaders({
        'X-XSRF-TOKEN': token,
        'LOGIN_TYPE':loginType
      });
      authReq = req.clone({ headers: headers });
    }else if(token!=null){
      const headers = new HttpHeaders({
        'X-XSRF-TOKEN': token,
      });
      authReq = req.clone({ headers: headers });
    }else if(loginType!=null){
      const headers = new HttpHeaders({
        'LOGIN_TYPE':loginType
      });
      authReq = req.clone({ headers: headers });
    }
    //return next.handle(authReq);

    return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          console.log(event);
         let csrfToken= event.headers.get(TOKEN_HEADER_KEY);
         if(csrfToken){
          this.token.saveCsrfToken(csrfToken);
         }
          
      }
      return event;
  }));

  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];