import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForkServiceService {

  constructor(private httpClient: HttpClient) { }

  getForks(forkUrl): Observable<any>{
    return this.httpClient.get(forkUrl);
  }

  getData(dataUrl): Observable<any>{
    return this.httpClient.get(dataUrl, {responseType: 'text'});
  }
}
