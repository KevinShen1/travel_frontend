import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_OPTION, REST_API } from 'src/app/system-parameter';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserAuth(userId:string, password:string) {
    let obj = {'userId': userId, 'userPassword': password}
    return this.http.post(REST_API + '/getUserAuth', obj, HTTP_OPTION);
  }

  getUserAuthByUserId(userId: string) {
    return this.http.post(REST_API + '/getUserAuthByUserId',userId,HTTP_OPTION);
  }

}
