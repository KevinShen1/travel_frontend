import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserMgmtComponent } from './pages/user-mgmt/user-mgmt.component';

const routes: Routes = [

  { path: '', component: AppComponent },
  // 登入頁
  { path: 'login', component: AppComponent },
  // 首頁
  { path: 'home', component: HomeComponent },
  //帳號權限
  { path: 'userMgmt', component: UserMgmtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
