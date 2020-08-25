import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { DataUserModel } from '../../models/dataUser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [HomeService]
})
export class MenuComponent implements OnInit {
  constructor(private readonly service: HomeService) { }

  user: DataUserModel;
  menu;

  ngOnInit() {
    this.getUser();
    this.getMenu();
  }

  getUser() {
    this.service.getUserData().subscribe(
      (data: any) => {
        this.user = {
          nameUser: data.user.name,
          typeUser: data.user.typeUser
        };
      }
    );
  }

  getMenu() {
    this.service.getMenuData().subscribe(
      (data: any) => {
        this.menu = data.items;

        console.log(this.menu)
      }
    );
  }

}
