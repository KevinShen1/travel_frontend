import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_OPTION, REST_API } from 'src/app/system-parameter';

@Injectable({
  providedIn: 'root'
})
export class UserMgmtService {

  constructor(
    private http:HttpClient
  ) { }

  queryUserList() {
    return this.http.post(REST_API + '/userMgmt/queryUserList', HTTP_OPTION);
  }

  queryRoleList() {
    return this.http.post(REST_API + '/userMgmt/queryRoleList', HTTP_OPTION);
  }

  queryAllProgList() {
    return this.http.post(REST_API + '/userMgmt/queryAllProgList', HTTP_OPTION);
  }

  getRoleProg(roleId:string) {
    return this.http.post(REST_API + '/userMgmt/getRoleProg', roleId, HTTP_OPTION);
  }

  saveUser(userId:string, userInfo:any, roleId:string) {
    let obj = {'userId':userId, 'userInfo' : userInfo, 'roleId' : roleId};
    return this.http.post(REST_API + '/userMgmt/saveUser', obj, HTTP_OPTION);
  }

  getUserInfoById(userId:string) {
    return this.http.post(REST_API + '/userMgmt/getUserInfoById', userId, HTTP_OPTION);
  }
}
