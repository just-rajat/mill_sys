import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { ConfirmDialogService } from '../pages/alerts/confirm-dialog.service';

const TOKEN_HEADER_KEY = 'X-XSRF-TOKEN';       // for Spring Boot back-end

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {



    constructor( private router: Router, private injector: Injector,private tokenService:TokenStorageService,private dialogService:ConfirmDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError(err => {

            let csrfToken= err.headers.get(TOKEN_HEADER_KEY);
            console.log(csrfToken);

            if(csrfToken){
                this.tokenService.saveCsrfToken(csrfToken);
            }

            if (!request.url.endsWith('doLogin')) {
                if (err.status === 500) {
                    ///debugger
                    // auto logout if 401 response returned from api
                    // this.router.navigate(['/register']);
                    // this.tokenService.signOut();
                    // if (!request.url.endsWith('dologout')) {
                    //    // this.loginService.logout();
                    //     this.router.navigate(['authentication/error-1']);
                    //     //this.createNotification("error",err.status,"Server is Sending UnExpected Error")
                    // }
                    // else {
                    //     this.router.navigate(['login']);
                    // }


                }
                else if (err.status === 406) {

                    if(request.url.endsWith('checkUserAndSendOTP')){
                        let error=err.error;
                        this.tokenService.nameSource.next(error)
                    }
                    else if(request.url.endsWith('orderEntry')){
                        let error = err.error.OrderEntryResponse.message;
                        this.dialogService.showError(error);
                    }
                    else if(request.url.endsWith('offerInitiation')){
                        let error = err.error.OfferInitiationResponse.message;
                        this.dialogService.showError(error);
                    }else if(request.url.endsWith('enquiryInitiation')){
                        let error = err.error.enquiryInitiationResponse.message;
                        this.dialogService.showError(error);
                    }
                    else if(request.url.endsWith('placeBid')){
                        let error = err.error.bidEntryResponse.message;
                        this.dialogService.showError(error);
                    }else if(request.url.endsWith('placeQuote')){
                        let error = err.error.placeQuoteResponse.message;
                        this.dialogService.showError(error);
                    }
                    else if(request.url.endsWith('bidOrderEntry')){
                      let error = err.error.BidEntryResponse.message;
                      this.dialogService.showError(error);
                  } else if(request.url.endsWith('saveBid')){
                    let error = err.error.saveBidQuoteResponse.message;
                    this.dialogService.showError(error);
                  } else if(request.url.endsWith('removeSavedOffer')){
                    let error = err.error.removeSavedOfferResponse.message;
                    this.dialogService.showError(error);
                  }else if(request.url.endsWith('submitSavedBid')){
                    let error = err.error.submitSavedBid.message;
                    this.dialogService.showError(error);
                  }else if(request.url.endsWith('submitSavedQuote')){
                    let error = err.error.submitSavedQuote.message;
                    this.dialogService.showError(error);
                  }else if(request.url.endsWith('cancelOrderBS')){
                    let error = err.error.cancelOrderResponse.message;
                    this.dialogService.showError(error);
                  }



                    //this.createNotification("error",err.status,"Server is Sending UnExpected Error")
                    //this.router.navigate(['exception/403']);
                }
                else if (err.status === 403) {
                    //this.createNotification("error",err.status,"Server is Sending UnExpected Error")
                    //this.router.navigate(['exception/403']);
                }
                else if (err.status === 400) {
                    let error=err.error;
                    console.log("error",error);
                    this.tokenService.nameSource.next(error)
                   // this.router.navigate(['exception/400']);
                   // this.createNotification("error",err.status,"Server is Sending UnExpected Error")
                }
                else if (err.status === 500) {
                    //this.router.navigate(['exception/500']);
                    //this.createNotification("error",err.status,"Server is Sending UnExpected Error");
                }
                else if (err.status === 504) {

                    //this.router.navigate(['exception/504']);
                   // this.createNotification("error",err.status,"Server is Sending UnExpected Error")
                }
                else if (err.status === 0) {

                    //this.router.navigate(['exception/504']);
                    //this.createNotification("error",request.url,"Not Able to Connect Server.Please check you Internert Connection or Contact Admin")
                }else if(err.status === 204){
                    let data=204;
                    this.tokenService.nameSource.next(data);
                }else if(err.status === 401){
                    let error=err.error.status;
                    if(request.url.endsWith('authenticate')){
                        this.tokenService.nameSource.next(error);
                    }else{
                        window.location.href = '/error-401';
                        //this.router.navigateByUrl('/error-401');
                        return throwError(error);
                    }

                }
                const error = err.error.message || err.statusText;
                return throwError(error);

            }
            const error = err.error.message || err.statusText;
           // return throwError(error);


        }))

    }


}
