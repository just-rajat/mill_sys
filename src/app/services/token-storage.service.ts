import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TAC_KEY = 'user-tac';
const TAC_KEY_LIST = 'user-tac-list';
const LANGUAGE_KEY = 'lang';
const MENU_KEY = 'menu';
const CSRF_TOKEN_KEY = 'csrf-token';
const LOGIN_TYPE_KEY = 'logintype';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  public nameSource = new BehaviorSubject<any>('');
  routeBrodcast:Observable<any> = this.nameSource.asObservable()

  constructor(private jwtHelper:JwtHelperService) { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveMenuList(menuList){
    window.sessionStorage.setItem(MENU_KEY, JSON.stringify(menuList));
  }
  public clearMenuList(){
    window.sessionStorage.removeItem(MENU_KEY);
  }
  public getMenuList(){
    const menu = window.sessionStorage.getItem(MENU_KEY);
    if (menu) {
      return JSON.parse(menu);
    }
    return null;
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public removeToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

  public saveCsrfToken(token: string): void {
    window.sessionStorage.removeItem(CSRF_TOKEN_KEY);
    window.sessionStorage.setItem(CSRF_TOKEN_KEY, token);
  }
  public removeCsrfToken(): void {
    window.sessionStorage.removeItem(CSRF_TOKEN_KEY);
  }

  public getCsrfToken(): string | null {
    return window.sessionStorage.getItem(CSRF_TOKEN_KEY);
  }


  public removeUser(): void {
    window.sessionStorage.removeItem(USER_KEY);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    
    window.sessionStorage.setItem(TAC_KEY_LIST, JSON.stringify (user.tacList));
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getSelectedTac(){
    return window.sessionStorage.getItem(TAC_KEY);
  }

  public setSelectedTac(tacId){
    return window.sessionStorage.setItem(TAC_KEY,tacId);
  }

  public getTacList(){
    return JSON.parse(window.sessionStorage.getItem(TAC_KEY_LIST));
  }
 

  public isAuthenticated(): boolean {

        return !this.jwtHelper.isTokenExpired(this.getToken());

  }


  public getLanguage(){
    return  window.sessionStorage.getItem(LANGUAGE_KEY);
  }


  public setLanguage(value){
    return  window.sessionStorage.setItem(LANGUAGE_KEY,value);
  }

  public getLoginType(){
    return  window.sessionStorage.getItem(LOGIN_TYPE_KEY);
  }


  public setLoginType(value){
    return  window.sessionStorage.setItem(LOGIN_TYPE_KEY,value);
  }
}
