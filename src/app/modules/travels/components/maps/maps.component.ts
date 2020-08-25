import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat = 41.85
  lng = -87.65

  origin = { lat: 29.8174782, lng: -95.6814757 }
  destination = { lat: 40.6976637, lng: -74.119764 }


  constructor() { }

  ngOnInit() {
  }

}
