import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CommonService {

    constructor(private http: HttpClient) {
    }
    public get(url: string): Observable<any> {
        return this.http.get(environment.SERVICE_URL+url);
    }
    downloadFile(url: string, obj: Object): Observable<any> {
        return this.http.post(environment.SERVICE_URL+url , obj, {
            responseType: "arraybuffer",
        });
    }

    public post(url:string, obj: object): Observable<any> {
        return this.http.post(environment.SERVICE_URL+url, obj).pipe(map(user => {
            return user;
        }));
    }
    public postWithHeader(url:string, obj: object): Observable<any> {
       let headers= new HttpHeaders()
       .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
        return this.http.post(environment.SERVICE_URL+url, obj,{headers}).pipe(map(user => {
            return user;
        }));
    }

    public postforImage(url:string, obj: object): Observable<any> {
        return this.http.post(environment.SERVICE_URL+url, obj,  { responseType: 'blob' }).pipe(map(user => {
            return user;
        }));
    }
    public getAll<T>(actionUrl: string): Observable<any> {
        return this.http.get<any>(environment.SERVICE_URL+actionUrl);
    }

    public getSingle<T>(id: number, actionUrl: string): Observable<any> {
        return this.http.get<any>(environment.SERVICE_URL+actionUrl + id);
    }
    public getSelected<T>(ParamData: object, actionUrl: string): Observable<any> {
       // alert(actionUrl);
        return this.http.post(environment.SERVICE_URL+actionUrl, ParamData);
    }

    public add<T>(itemName: string, actionUrl: string): Observable<T> {
        const toAdd = { ItemName: itemName };

        return this.http.post<any>(environment.SERVICE_URL+actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any, actionUrl: string): Observable<T> {
        return this.http
            .put<any>(environment.SERVICE_URL+actionUrl + id, itemToUpdate);
    }

    public delete<T>(id: number, actionUrl: string): Observable<T> {
        return this.http.delete<any>(environment.SERVICE_URL+actionUrl + id);
    }
}