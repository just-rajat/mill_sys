import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, PRIMARY_OUTLET, UrlTree } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenService: TokenStorageService

    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // if(this.tokenService.isAuthenticated()){
        //     this.router.navigate(['/register']);
        //     return false;
        // }

        let menuList=this.tokenService.getMenuList();
         let data=true;

        //APPENDING USER PROFILES MENU 
   console.log("menuList",menuList)


        if(menuList){
            for (let index = 0; index < menuList.length; index++) {
                const parentelement = menuList[index];

                if(parentelement.children){
                    for (let index = 0; index < parentelement.children.length; index++) {
                        const childelement = parentelement.children[index].route;
                        if(childelement==state.url){
    
                            return true;
                        }
                    }
                }


                if(parentelement.children){
                    for (let index = 0; index < parentelement.children.length; index++) {
                        const childelement = parentelement.children[index];

                        if(childelement.children){
                            for (let index = 0; index < childelement.children.length; index++) {
                                const element = childelement.children[index].route;
                                if(element==state.url){
                                    return true;
                                }
                            }
                        }
                       
                       
                    }
                }
                
            }
            data=false;
        }
        if(state.url=="main/apps/register/new-registration" || "main/apps/register/admin")
            {
                data=true;
            }
        if(!data){
            this.router.navigate(['/error-401']);
            return false;
        }
       return true;

    }


    // I determine if the current route-request is part of a page refresh.
    private isPageRefresh() : boolean {

        // If the router has yet to establish a single navigation, it means that this
        // navigation is the first attempt to reconcile the application state with the
        // URL state. Meaning, this is a page refresh.
        return( ! this.router.navigated );

    }
}
