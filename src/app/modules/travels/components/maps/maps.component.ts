import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers: [TravelsService]
})
export class MapsComponent implements OnInit {

  lat: any;
  lng: any;

  origin: any;
  destination: any;

  constructor(private readonly service: SharedService,
    private readonly travelsService: TravelsService) { }

  ngOnInit() {
    this.getDefaultCoordinates();
    this.getGeneralCoordinates();
  }

  getGeneralCoordinates() {
    this.travelsService.getGenelarCoordinates().subscribe(
      (data: any) => {
        this.lat = data.general.lat;
        this.lng = data.general.lng;
      }
    );
  }

  getDefaultCoordinates() {
    this.service.getSetDefaultCoordinates().subscribe(
      data => {
        this.origin = data.origin;
        this.destination = data.destination;
      }
    );
  }

}
