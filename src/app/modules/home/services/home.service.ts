import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly httpClient: HttpClient) { }

  getUserData() {
    return this.httpClient.get('../../../../assets/data/userData.json');
  }

  getMenuData() {
    return this.httpClient.get('../../../../assets/data/menuData.json');
  }

}
