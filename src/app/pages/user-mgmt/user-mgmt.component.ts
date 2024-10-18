import { Component, OnInit } from '@angular/core';
import { UserMgmtService } from './user-mgmt.service';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { UserObject } from 'src/app/vo/userObject';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnInit{

userListData:any = [];
listOfData:any = [];
isLoading:boolean = false;
keyWordValue:string = '';
isVisible:boolean = false;
roleSelectedValue:string = '';
roleList:any = [];
defaultCheckedKeys:string[] = [];
progSet: NzTreeNodeOptions[] = [];

userInfo = {
  userId:'',
  userPassword:'',
  userName:'',
  memo:'',
  isActive:false
}






constructor(
  private userMgmtService: UserMgmtService,
  private userObject: UserObject,
  private modalService: NzModalService
) {

}

  ngOnInit(): void {
    this.userMgmtService.queryUserList().subscribe((vo:any) =>{
      this.userListData = vo.data;
      this.listOfData = vo.data;
    })
  }

  searchKeyWord(value:string) {
    this.listOfData = [];
    this.userListData.forEach((element:any) => {
      if(element.userId.toUpperCase().includes(value.toUpperCase()) || element.userName.toUpperCase().includes(value.toUpperCase()) ||
         element.roleId.toUpperCase().includes(value.toUpperCase()) || element.roleName.toUpperCase().includes(value.toUpperCase())) {
        this.listOfData.push(element);
      }
    });
  }

  openModal(userId:string) {
    this.isVisible = true;

    this.userMgmtService.queryRoleList().subscribe((vo:any) =>{
      this.roleList = vo.data;
      this.roleSelectedValue = this.roleList[0].roleId;
      console.log(this.roleSelectedValue)
    })

    this.userMgmtService.queryAllProgList().subscribe((menu:any) => {
      this.progSet = menu.data;
    })
    if(userId != '') {
      this.userMgmtService.getUserInfoById(userId).subscribe((obj:any) =>{
        this.userInfo = obj.data.userInfo;
        this.roleSelectedValue = obj.data.roleId;
        this.userMgmtService.getRoleProg(this.roleSelectedValue).subscribe((item:any) =>{
          this.defaultCheckedKeys = item.data;
        })
      })
    }else {
      this.userMgmtService.queryRoleList().subscribe((vo:any) =>{
        this.roleList = vo.data;
        this.roleSelectedValue = this.roleList[0].roleId;
        this.userMgmtService.getRoleProg(this.roleSelectedValue).subscribe((item:any) =>{
          this.defaultCheckedKeys = item.data;
        })
        console.log(this.roleSelectedValue)
      })
    }

    // this.userMgmtService.queryAllProgList().subscribe((menu:any) => {
    //   this.progSet = menu.data;
    // })
  }

  handleCancel() {
    this.isVisible = false;
    this.roleSelectedValue = '';
    this.userInfo = {
      userId:'',
      userPassword:'',
      userName:'',
      memo:'',
      isActive:false
    }
  }

  handleOk() {
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '確認儲存?',
      nzOnOk: () => this.saveUser()
    });
  }

  saveUser() {
    this.userMgmtService.saveUser(this.userObject.userId, this.userInfo, this.roleSelectedValue).subscribe((vo:any) =>{
      if(!vo.status) {
        alert('儲存失敗');
        return;
      }
      this.isVisible = false;
      this.roleSelectedValue = '';
      this.userInfo = {
        userId:'',
        userPassword:'',
        userName:'',
        memo:'',
        isActive:false
    }
    })
  }

  roleSelectChange(value:string) {
    this.userMgmtService.getRoleProg(value).subscribe((vo:any) =>{
      if(!vo.status) {
        this.defaultCheckedKeys = [];
      }

      this.defaultCheckedKeys = vo.data;
      console.log(this.defaultCheckedKeys)
    })
  }

  nzCheck(event:any) {

  }

}
