import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { UserObject } from 'src/app/vo/userObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userData: any;
  isSpinning: boolean = true;
  listOfData:any[] = [];

  array = [
            {img:'assets\\images\\b1.jpg',url:'https://www.liontravel.com/category/zh-tw/index'},
            {img:'assets\\images\\b2.jpg',url:'https://www.startravel.com.tw/outbound/jp/'},
            {img:'assets\\images\\b3.jpg',url:'https://vacation.eztravel.com.tw/'}
          ]

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private userObject: UserObject,
    private router: Router
  ) {this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };}

  ngOnInit(): void {
    this.homeService.getTravelShareMst(this.userObject.userId).subscribe((vo:any) =>{
      this.listOfData = vo.data;
    })
  }

}
