import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  coordinatesDefault: Subject<any> = new Subject<any>();

  constructor() { }

  getSetDefaultCoordinates(coordinate?: any) {
    if (coordinate) {
      this.coordinatesDefault.next(coordinate);
    }
    return this.coordinatesDefault;
  }
}
