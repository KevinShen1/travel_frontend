import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_OPTION, REST_API } from 'src/app/system-parameter';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }

  getTravelShareMst(userId: string) {
    return this.http.post(REST_API + '/getTravelShareMst',userId,HTTP_OPTION);
  }

}
