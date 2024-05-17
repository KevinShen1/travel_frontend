import { UserObject } from './vo/userObject';
import { REST_SERVER_URL, HTTP_OPTION } from './system-parameter';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  userObj: any = {
    userId: '',
    userName: '',
    password: '',
    remember: false
  }

  sessionUserId = sessionStorage.getItem('userId');
  // sessionUserName = sessionStorage.getItem('userName');

  isLoging: boolean = false;
  isLoading: boolean = false;

  constructor(
    private route: Router,
    private http: HttpClient,
    public userObject: UserObject,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if(this.sessionUserId) {
      this.submitForm();
    }
  }

  submitForm(): void {
    if(!this.sessionUserId) {
      if (this.userObj.userId && this.userObj.password) {
       this.authService.getUserAuth(this.userObj.userId,this.userObj.password).subscribe((vo : any) =>{
          if(!vo.status) {
            alert(vo.message);
            return;
          }
          this.isLoging = true;
          this.isLoading = true;
          this.userObject.userId = this.userObj.userId;
          sessionStorage.setItem('userId', this.userObj.userId);
          this.sessionUserId = this.userObj.userId;
          this.userObject.userName = vo.data.userInfo.userName;
          this.userObject.isActive = vo.data.userInfo.isActive;
          this.route.navigate(['/home']);
        })
      } else {
        alert('帳號或密碼不可為空');
      }
    }else {
      this.isLoging = true;
      this.userObject.userId = this.sessionUserId;
      this.authService.getUserAuthByUserId(this.sessionUserId).subscribe((vo:any) =>{
        if(!vo.status) {
          alert(vo.message);
          return;
        }
        this.isLoading = true;
        this.userObject.userId = vo.data.userInfo.userId;
        this.userObject.userName = vo.data.userInfo.userName;
        this.userObject.isActive = vo.data.userInfo.isActive;
        this.route.navigate(['/home']);
      })
    }
  }


  gotoHome(){

  }

  logout() {
    this.isLoging = true;
    this.userObj = {
      userId: '',
      userName: '',
      password: '',
      remember: false
    }
    sessionStorage.removeItem('userId');
    // sessionStorage.removeItem('userName');
  }
}
