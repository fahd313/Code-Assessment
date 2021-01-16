import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsersByUsername(username): Observable<any>{
    return this.httpClient.get('https://api.github.com/users/' + username + '/gists');
  }
}
