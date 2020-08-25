import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { itemUser } from '../../const/general-const';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  submenu: any;
  favorites: any;
  itemUserActive = true;
  defaultCoordinates: any;


  constructor(private readonly service: HomeService,
              private readonly sharedService: SharedService) { }

  ngOnInit() {
    this.getSubmenu();
    this.getFavorites();
  }

  getSubmenu() {
    this.service.getSubmenuData().subscribe(
      (data: any) => {
        this.submenu = data.items;
      }
    );
  }

  getFavorites() {
    this.service.getFavoritesData().subscribe(
      (data: any) => {

        this.favorites = data.favorites;
        const originDefault = this.favorites[0].directions.find(item => item.active === true).coordinates;
        const destinationDefault = this.favorites[1].directions.find(item => item.active === true).coordinates;

        this.defaultCoordinates = {
          origin: originDefault,
          destination: destinationDefault
        };

        this.sharedService.getSetDefaultCoordinates(this.defaultCoordinates);
      }
    );
  }

  changeItemActive(item, index) {
    this.submenu.find(data => data.active === true).active = false;
    if (item.id === itemUser) {
      this.itemUserActive = true;
    } else {
      this.itemUserActive = false;
    }
    this.submenu[index].active = true;
  }


}
