import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {

    getEventSource(url:string):EventSource {
        return new EventSource(url);
    }
}