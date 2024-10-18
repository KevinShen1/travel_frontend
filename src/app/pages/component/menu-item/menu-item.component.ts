import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit{
@Input() data: any;





constructor(
  private router:Router
) {

}


  ngOnInit(): void {
    console.log(this.data)
  }

  changePage(menu:any) {
    this.router.navigate([menu.progUrl], { skipLocationChange: true })
  }

}
