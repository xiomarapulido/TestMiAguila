import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat = 4.570868
  lng = -74.297333

  origin: any;
  destination: any;

  constructor(private readonly service: SharedService) { }

  ngOnInit() {
    this.service.getSetDefaultCoordinates().subscribe(
      data => {
        this.origin = data.origin;
        this.destination = data.destination;
      }
    )
  }

}
