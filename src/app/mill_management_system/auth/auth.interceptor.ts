import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { UserAuthService } from "../services/auth/user-auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private userAuthService: UserAuthService,
        private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get("No-Auth")==="True"){
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();
        //const headers = req.headers.set('Authorization', `Bearer ${token}`);
        const request = this.addToken(req, token);


        console.log(request.headers);
        
        return next.handle(request).pipe(
            catchError(
                (error: HttpErrorResponse) => {
                    console.log(error.status);
                    if(error.status === 401){
                        this.router.navigate(['/']);
                    }else if(error.status === 403){
                        this.router.navigate(['/forbidden'])
                    }
                    return throwError("Something is wrong");
                },
            )
        );
    }

    private addToken(request: HttpRequest<any>, token: string){
        /* return request.clone(
            {
                setHeaders: {
                    Authorization : `Bearer ${token}`
                }
            }
        ); */


        const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
        });

        return authReq;

    }

}