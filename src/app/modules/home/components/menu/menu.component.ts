import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { DataUserModel } from '../../models/dataUser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [HomeService]
})
export class MenuComponent implements OnInit {

  @Output() currentItemMenu: EventEmitter<string> = new EventEmitter();
  user: DataUserModel;
  menu: any;

  constructor(private readonly service: HomeService) { }

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
        const itemActive: string = this.menu.find(item => item.active === true).id;
        this.currentItemMenu.emit(itemActive);
      }
    );
  }

  changeItemActive(item, index) {
    this.menu.find(data => data.active === true).active = false;
    this.menu[index].active = true;
    this.currentItemMenu.emit(item.id);
  }
}
