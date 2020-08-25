import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { itemUser, idOrigin } from '../../const/general-const';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  submenu: any;
  favorites: any;
  originDefault: any;
  destinationDefault: any;
  defaultCoordinates: any;
  itemUserActive = true;


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
        const originData = this.favorites[0].directions.find(item => item.active === true).coordinates;
        const destinationData = this.favorites[1].directions.find(item => item.active === true).coordinates;

        this.sendCoordinates(originData, destinationData);
      }
    );
  }

  sendCoordinates(origin, destination) {
    this.originDefault = origin;
    this.destinationDefault = destination;

    this.defaultCoordinates = {
      origin: this.originDefault,
      destination: this.destinationDefault
    };

    this.sharedService.getSetDefaultCoordinates(this.defaultCoordinates);
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

  changeCoordinates(data, index) {

    if (data.id === idOrigin) {
      this.favorites[0].directions.find(item => item.active === true).active = false;
      this.favorites[0].directions[index].active = true;
      const origin = data.directions[index].coordinates;
      this.sendCoordinates(origin, this.destinationDefault);
    } else {
      this.favorites[1].directions.find(item => item.active === true).active = false;
      this.favorites[1].directions[index].active = true;
      const destination = data.directions[index].coordinates;
      this.sendCoordinates(this.originDefault, destination);
    }



  }


}
