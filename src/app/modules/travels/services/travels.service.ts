import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private readonly httpClient: HttpClient) { }

  getGenelarCoordinates() {
    return this.httpClient.get('../../../../assets/data/coordinatesData.json');
  }
}
